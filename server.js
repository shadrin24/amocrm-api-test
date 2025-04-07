const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZjNDAwYWI2MDMyMmVmYzU4YWYwMDNmYmE0MzlmNWM1NTNkZTEwMWE1MjcxOTM0MWM1ZTcxMjk1ZTY1MTkwMDhlYTdjY2YzZjA3NGY1MjYzIn0.eyJhdWQiOiJhNDI4OTRlMS1mNTFiLTQ4NDQtOTc3Yy1hNDY4ODQxNGUzZDMiLCJqdGkiOiI2YzQwMGFiNjAzMjJlZmM1OGFmMDAzZmJhNDM5ZjVjNTUzZGUxMDFhNTI3MTkzNDFjNWU3MTI5NWU2NTE5MDA4ZWE3Y2NmM2YwNzRmNTI2MyIsImlhdCI6MTc0Mzk5MDI2NCwibmJmIjoxNzQzOTkwMjY0LCJleHAiOjE3NDQwNzY2NjQsInN1YiI6IjEyMzQyNDUwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyMzM5NjkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOTBlM2UwYmQtMWQ4Zi00YmU4LTgwZWYtYWJiMTM2ZDc2YzllIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.V7eDDY6c9f9I76SMMSOs-UKVYwViG0IWAdlTonG3xkw-ONQoupAl1o2Dqr3tG3Ar-ercJZShO0DHXezIgoYxOeQIoqtuh7Fya8kXJlk-oJbcqu-161p2aDGl6LI_FHMVoauI6SjABW8rJyMRrmVkYyJb7vpT-ojQraOnWyfRw1tfqiM3sRNgc9dKy_7j8F_leAQdLgASz3b8AzabN5bVAPBY7C1y61UOGEiEGLJ9cJq078xU9cHzaBbFGD7wD0C_8q9zKkC8LexUN9f3k39qzdKLCM8O_m6NNIPmrnohSM-w1QCVuKTRm_lfQFCuwelomowOMIIjc3L1PkhCBZjN4g';
const SUBDOMAIN = 'shadrin24.amocrm.ru';

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
    target: `https://${SUBDOMAIN}`,
    changeOrigin: true,
    pathRewrite: {
        '^/api/v4': '/api/v4'
    },
    onProxyReq: (proxyReq, req, res) => {
        // Добавляем все необходимые заголовки
        proxyReq.setHeader('Authorization', `Bearer ${ACCESS_TOKEN}`);
        proxyReq.setHeader('X-Base-Domain', SUBDOMAIN);
        proxyReq.setHeader('Content-Type', 'application/json');
        
        // Удаляем и устанавливаем правильный host
        proxyReq.removeHeader('host');
        proxyReq.setHeader('host', SUBDOMAIN);
        
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
                console.log('Error response body:', body);
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