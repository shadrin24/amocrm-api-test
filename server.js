import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { API_CONFIG } from './config.js';

const app = express();
const port = 3000;

// Включаем CORS для всех запросов
app.use(cors());

// Раздаем статические файлы
app.use(express.static('./'));

// Логирование запросов
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Настраиваем прокси для API AmoCRM
app.use('/api/v4', createProxyMiddleware({
    target: `https://${API_CONFIG.subdomain}.amocrm.ru`,
    changeOrigin: true,
    pathRewrite: {
        '^/api/v4': '/api/v4'
    },
    onProxyReq: (proxyReq, req, res) => {
        // Добавляем все необходимые заголовки
        proxyReq.setHeader('Authorization', `Bearer ${API_CONFIG.accessToken}`);
        proxyReq.setHeader('X-Base-Domain', `${API_CONFIG.subdomain}.amocrm.ru`);
        proxyReq.setHeader('Content-Type', 'application/json');
        
        // Удаляем и устанавливаем правильный host
        proxyReq.removeHeader('host');
        proxyReq.setHeader('host', `${API_CONFIG.subdomain}.amocrm.ru`);
        
        // Логируем заголовки для отладки
        console.log('Request headers:', proxyReq.getHeaders());
    },
    onProxyRes: (proxyRes, req, res) => {
        console.log('Proxy response:', proxyRes.statusCode);
        console.log('Response headers:', proxyRes.headers);
        
        // Если получаем ошибку, логируем тело ответа
        if (proxyRes.statusCode >= 400) {
            let body = '';
            proxyRes.on('data', function(chunk) {
                body += chunk;
            });
            proxyRes.on('end', function() {
                try {
                    const parsed = JSON.parse(body);
                    console.log('Error response body:', parsed);
                } catch (e) {
                    console.log('Raw error response:', body);
                }
            });
        }
    },
    onError: (err, req, res) => {
        console.error('Proxy error:', err);
        res.status(500).json({ error: 'Proxy error', details: err.message });
    }
}));

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
}); 