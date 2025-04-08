// Конфигурация API
const API_CONFIG = {
    baseUrl: 'http://localhost:3000/api/v4',
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZjNDAwYWI2MDMyMmVmYzU4YWYwMDNmYmE0MzlmNWM1NTNkZTEwMWE1MjcxOTM0MWM1ZTcxMjk1ZTY1MTkwMDhlYTdjY2YzZjA3NGY1MjYzIn0.eyJhdWQiOiJhNDI4OTRlMS1mNTFiLTQ4NDQtOTc3Yy1hNDY4ODQxNGUzZDMiLCJqdGkiOiI2YzQwMGFiNjAzMjJlZmM1OGFmMDAzZmJhNDM5ZjVjNTUzZGUxMDFhNTI3MTkzNDFjNWU3MTI5NWU2NTE5MDA4ZWE3Y2NmM2YwNzRmNTI2MyIsImlhdCI6MTc0Mzk5MDI2NCwibmJmIjoxNzQzOTkwMjY0LCJleHAiOjE3NDQwNzY2NjQsInN1YiI6IjEyMzQyNDUwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyMzM5NjkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOTBlM2UwYmQtMWQ4Zi00YmU4LTgwZWYtYWJiMTM2ZDc2YzllIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.V7eDDY6c9f9I76SMMSOs-UKVYwViG0IWAdlTonG3xkw-ONQoupAl1o2Dqr3tG3Ar-ercJZShO0DHXezIgoYxOeQIoqtuh7Fya8kXJlk-oJbcqu-161p2aDGl6LI_FHMVoauI6SjABW8rJyMRrmVkYyJb7vpT-ojQraOnWyfRw1tfqiM3sRNgc9dKy_7j8F_leAQdLgASz3b8AzabN5bVAPBY7C1y61UOGEiEGLJ9cJq078xU9cHzaBbFGD7wD0C_8q9zKkC8LexUN9f3k39qzdKLCM8O_m6NNIPmrnohSM-w1QCVuKTRm_lfQFCuwelomowOMIIjc3L1PkhCBZjN4g', // Замените на ваш токен
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZjNDAwYWI2MDMyMmVmYzU4YWYwMDNmYmE0MzlmNWM1NTNkZTEwMWE1MjcxOTM0MWM1ZTcxMjk1ZTY1MTkwMDhlYTdjY2YzZjA3NGY1MjYzIn0.eyJhdWQiOiJhNDI4OTRlMS1mNTFiLTQ4NDQtOTc3Yy1hNDY4ODQxNGUzZDMiLCJqdGkiOiI2YzQwMGFiNjAzMjJlZmM1OGFmMDAzZmJhNDM5ZjVjNTUzZGUxMDFhNTI3MTkzNDFjNWU3MTI5NWU2NTE5MDA4ZWE3Y2NmM2YwNzRmNTI2MyIsImlhdCI6MTc0Mzk5MDI2NCwibmJmIjoxNzQzOTkwMjY0LCJleHAiOjE3NDQwNzY2NjQsInN1YiI6IjEyMzQyNDUwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyMzM5NjkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOTBlM2UwYmQtMWQ4Zi00YmU4LTgwZWYtYWJiMTM2ZDc2YzllIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.V7eDDY6c9f9I76SMMSOs-UKVYwViG0IWAdlTonG3xkw-ONQoupAl1o2Dqr3tG3Ar-ercJZShO0DHXezIgoYxOeQIoqtuh7Fya8kXJlk-oJbcqu-161p2aDGl6LI_FHMVoauI6SjABW8rJyMRrmVkYyJb7vpT-ojQraOnWyfRw1tfqiM3sRNgc9dKy_7j8F_leAQdLgASz3b8AzabN5bVAPBY7C1y61UOGEiEGLJ9cJq078xU9cHzaBbFGD7wD0C_8q9zKkC8LexUN9f3k39qzdKLCM8O_m6NNIPmrnohSM-w1QCVuKTRm_lfQFCuwelomowOMIIjc3L1PkhCBZjN4g',
        'Content-Type': 'application/json'
    }
};

// Класс для управления запросами с ограничением
class RequestManager {
    constructor(limitPerSecond = 2) {
        this.limitPerSecond = limitPerSecond;
        this.lastRequestTime = 0;
        this.queue = [];
        this.processingQueue = false;
        this.maxRetries = 3;
    }

    async makeRequest(url, method = 'GET', data = null) {
        return new Promise((resolve) => {
            this.queue.push({ 
                url, 
                method, 
                data, 
                resolve,
                retries: 0,
                timestamp: Date.now()
            });
            
            if (!this.processingQueue) {
                this.processQueue();
            }
        });
    }

    async processQueue() {
        if (this.queue.length === 0) {
            this.processingQueue = false;
            return;
        }

        this.processingQueue = true;
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        const minDelay = 1000;

        if (timeSinceLastRequest < minDelay) {
            setTimeout(() => this.processQueue(), minDelay - timeSinceLastRequest);
            return;
        }

        // Берем до limitPerSecond запросов из очереди
        const batchRequests = this.queue.splice(0, this.limitPerSecond);
        this.lastRequestTime = now;

        // Выполняем запросы параллельно
        const batchPromises = batchRequests.map(request => this.executeRequest(request));
        
        try {
            const results = await Promise.all(batchPromises);
            
            // Обрабатываем результаты
            results.forEach((result, index) => {
                const request = batchRequests[index];
                
                if (result.error && request.retries < this.maxRetries) {
                    // Если произошла ошибка и не превышено количество попыток,
                    // возвращаем запрос в очередь
                    request.retries++;
                    console.log(`Повторная попытка ${request.retries} для запроса ${request.url}`);
                    this.queue.push(request);
                } else {
                    // Возвращаем результат
                    request.resolve(result.data);
                }
            });
        } catch (error) {
            console.error('Ошибка при выполнении batch-запросов:', error);
        }

        // Планируем следующую обработку очереди
        setTimeout(() => this.processQueue(), minDelay);
    }

    async executeRequest(request) {
        try {
            const options = {
                method: request.method,
                headers: {
                    ...API_CONFIG.headers
                }
            };

            if (request.data) {
                options.body = JSON.stringify(request.data);
            }

            console.log(`[${new Date().toISOString()}] Отправка запроса: ${request.url}`);
            const response = await fetch(request.url, options);
            
            if (!response.ok) {
                console.log(`Ошибка запроса ${request.url}: ${response.status}`);
                return { error: true, data: null };
            }

            const responseData = await response.json();
            return { error: false, data: responseData };
        } catch (error) {
            console.error(`Ошибка выполнения запроса ${request.url}:`, error);
            return { error: true, data: null };
        }
    }
}

// Создаем экземпляр менеджера запросов
const requestManager = new RequestManager();

// Функция для форматирования даты
function formatDate(timestamp) {
    // Если timestamp в секундах (как в задачах), умножаем на 1000
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Функция для определения статуса задачи
function getTaskStatus(task) {
    if (!task) return { color: 'red', text: 'Нет задач' };

    const taskDate = new Date(task.complete_till * 1000); // Умножаем на 1000, так как timestamp в секундах
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // начало текущего дня
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // начало следующего дня

    // Если задача просрочена (дата выполнения раньше текущего дня)
    if (taskDate < today) {
        return { color: 'red', text: 'Просрочено' };
    }
    
    // Если задача на сегодня (в течение текущего дня)
    if (taskDate >= today && taskDate < tomorrow) {
        return { color: 'green', text: 'Сегодня' };
    }
    
    // Если задача более чем через день
    return { color: 'yellow', text: `Через ${Math.ceil((taskDate - today) / (1000 * 60 * 60 * 24))} дней` };
}

// Функция для загрузки сделок
async function loadDeals() {
    const dealsUrl = `${API_CONFIG.baseUrl}/leads`;
    const deals = await requestManager.makeRequest(dealsUrl, 'GET');

    if (!deals || !deals._embedded || !deals._embedded.leads) return;

    const tableBody = document.getElementById('dealsTableBody');
    tableBody.innerHTML = '';

    // Создаем Map для хранения строк таблицы по ID сделки
    const rowsMap = new Map();

    // Отображаем все сделки сразу с временными данными контактов
    deals._embedded.leads.forEach(deal => {
        const row = document.createElement('tr');
        row.className = 'cursor-pointer';
        row.onclick = () => showDealDetails(deal.id);
        
        row.innerHTML = `
            <td>${deal.id}</td>
            <td>${deal.name}</td>
            <td>${deal.price || 0}</td>
            <td><span class="text-muted">В очереди...</span></td>
            <td><span class="text-muted">В очереди...</span></td>
        `;
        
        tableBody.appendChild(row);
        rowsMap.set(deal.id, row);
    });

    // Теперь асинхронно загружаем контакты для каждой сделки
    const dealsArray = deals._embedded.leads;
    for (let i = 0; i < dealsArray.length; i += 2) {
        const currentDeals = dealsArray.slice(i, i + 2);
        
        // Обновляем статус для текущей пары сделок на "Загрузка..."
        currentDeals.forEach(deal => {
            const row = rowsMap.get(deal.id);
            if (row) {
                row.cells[3].innerHTML = '<span class="text-primary"><i class="fas fa-spinner fa-spin"></i> Загрузка...</span>';
                row.cells[4].innerHTML = '<span class="text-primary"><i class="fas fa-spinner fa-spin"></i> Загрузка...</span>';
            }
        });

        // Запускаем параллельную загрузку контактов для двух сделок
        const contactPromises = currentDeals.map(async (deal) => {
            const linksUrl = `${API_CONFIG.baseUrl}/leads/${deal.id}/links`;
            const linksResponse = await requestManager.makeRequest(linksUrl, 'GET');
            const contactLinks = linksResponse?._embedded?.links || [];
            
            const contacts = [];
            for (const link of contactLinks) {
                if (link.to_entity_type === 'contacts') {
                    const contactUrl = `${API_CONFIG.baseUrl}/contacts/${link.to_entity_id}`;
                    const contactResponse = await requestManager.makeRequest(contactUrl, 'GET');
                    if (contactResponse) {
                        contacts.push(contactResponse);
                    }
                }
            }

            return { dealId: deal.id, contacts };
        });

        // Ждем загрузки контактов для текущей пары сделок
        const results = await Promise.all(contactPromises);
        
        // Обновляем информацию в таблице
        results.forEach(result => {
            const row = rowsMap.get(result.dealId);
            if (!row) return;

            if (result.contacts.length > 0) {
                // Берем первый контакт для отображения
                const contact = result.contacts[0];
                let phone = 'Нет телефона';
                if (contact?.custom_fields_values) {
                    const phoneField = contact.custom_fields_values.find(field => field.field_code === 'PHONE');
                    if (phoneField?.values?.[0]?.value) {
                        phone = phoneField.values[0].value;
                    }
                }

                row.cells[3].innerHTML = `<span class="text-success">${contact.name || 'Нет контакта'}</span>`;
                row.cells[4].innerHTML = `<span class="text-success">${phone}</span>`;
            } else {
                row.cells[3].innerHTML = '<span class="text-danger">Нет контакта</span>';
                row.cells[4].innerHTML = '<span class="text-danger">Нет телефона</span>';
            }
        });
    }
}

// Функция для отображения деталей сделки
async function showDealDetails(dealId) {
    const modal = new bootstrap.Modal(document.getElementById('dealDetailsModal'));
    modal.show();

    const loadingIndicator = document.getElementById('loadingIndicator');
    const dealContent = document.getElementById('dealContent');

    // Показываем индикатор загрузки
    loadingIndicator.style.display = 'block';
    dealContent.style.display = 'none';
    dealContent.innerHTML = '';

    try {
        // Получаем детали сделки
        const dealUrl = `${API_CONFIG.baseUrl}/leads/${dealId}`;
        const deal = await requestManager.makeRequest(dealUrl, 'GET');

        if (!deal) {
            throw new Error('Не удалось загрузить детали сделки');
        }

        // Получаем задачи для сделки
        const tasksUrl = `${API_CONFIG.baseUrl}/tasks?filter[entity_id]=${dealId}`;
        const tasksResponse = await requestManager.makeRequest(tasksUrl, 'GET');
        const task = tasksResponse?._embedded?.tasks?.[0];
        console.log(task);

        // Получаем статус задачи
        const status = getTaskStatus(task);

        // Формируем HTML с деталями
        const detailsHtml = `
            <div class="deal-details">
                <p><strong>ID:</strong> ${deal.id}</p>
                <p><strong>Название:</strong> ${deal.name}</p>
                <p><strong>Бюджет:</strong> ${deal.price || 0}</p>
                <p><strong>Дата создания:</strong> ${formatDate(deal.created_at)}</p>
                <p>
                    <strong>Статус задачи:</strong>
                    <span class="status-circle status-${status.color}"></span>
                    ${status.text}
                </p>
                ${task ? `<p><strong>Дата выполнения задачи:</strong> ${formatDate(task.complete_till)}</p>` : ''}
            </div>
        `;

        // Скрываем индикатор загрузки и показываем контент
        loadingIndicator.style.display = 'none';
        dealContent.style.display = 'block';
        dealContent.innerHTML = detailsHtml;

    } catch (error) {
        console.error('Ошибка при загрузке деталей:', error);
        dealContent.innerHTML = '<div class="alert alert-danger">Ошибка при загрузке деталей сделки</div>';
        loadingIndicator.style.display = 'none';
        dealContent.style.display = 'block';
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', loadDeals); 