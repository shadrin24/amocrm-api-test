// Конфигурация API
const API_CONFIG = {
    baseUrl: 'https://nomnom-nine.vercel.app/',
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
    }

    async makeRequest(url, options = {}) {
        return new Promise((resolve) => {
            this.queue.push({ url, options, resolve });
            this.processQueue();
        });
    }

    async processQueue() {
        if (this.queue.length === 0) return;

        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        const minDelay = 1000 / this.limitPerSecond;

        if (timeSinceLastRequest < minDelay) {
            setTimeout(() => this.processQueue(), minDelay - timeSinceLastRequest);
            return;
        }

        const { url, options, resolve } = this.queue.shift();
        this.lastRequestTime = now;

        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    ...API_CONFIG.headers,
                    ...options.headers
                }
            });
            const data = await response.json();
            resolve(data);
        } catch (error) {
            console.error('Ошибка запроса:', error);
            resolve(null);
        }

        this.processQueue();
    }
}

// Создаем экземпляр менеджера запросов
const requestManager = new RequestManager();

// Функция для форматирования даты
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Функция для определения статуса задачи
function getTaskStatus(task) {
    if (!task) return { color: 'red', text: 'Нет задач' };

    const taskDate = new Date(task.complete_till * 1000);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffDays = Math.ceil((taskDate - today) / (1000 * 60 * 60 * 24));

    if (taskDate < today) {
        return { color: 'red', text: 'Просрочено' };
    } else if (diffDays === 0) {
        return { color: 'green', text: 'Сегодня' };
    } else {
        return { color: 'yellow', text: `Через ${diffDays} дней` };
    }
}

// Функция для загрузки сделок
async function loadDeals() {
    const dealsUrl = `${API_CONFIG.baseUrl}/api/v4/leads`;
    const deals = await requestManager.makeRequest(dealsUrl);

    if (!deals) return;

    const tableBody = document.getElementById('dealsTableBody');
    tableBody.innerHTML = '';

    for (const deal of deals._embedded.leads) {
        const contacts = await loadContacts(deal.id);
        
        for (const contact of contacts) {
            const row = document.createElement('tr');
            row.className = 'cursor-pointer';
            row.onclick = () => showDealDetails(deal.id);
            
            row.innerHTML = `
                <td>${deal.id}</td>
                <td>${deal.name}</td>
                <td>${deal.price || 0}</td>
                <td>${contact.name}</td>
                <td>${contact.phone || 'Нет телефона'}</td>
            `;
            
            tableBody.appendChild(row);
        }
    }
}

// Функция для загрузки контактов сделки
async function loadContacts(dealId) {
    const contactsUrl = `${API_CONFIG.baseUrl}/api/v4/contacts?filter[leads][id]=${dealId}`;
    const contacts = await requestManager.makeRequest(contactsUrl);
    
    return contacts?._embedded?.contacts || [];
}

// Функция для отображения деталей сделки
async function showDealDetails(dealId) {
    const modal = new bootstrap.Modal(document.getElementById('dealDetailsModal'));
    const spinner = document.getElementById('dealSpinner');
    const content = document.getElementById('dealDetailsContent');
    
    spinner.style.display = 'block';
    content.style.display = 'none';
    modal.show();

    const dealUrl = `${API_CONFIG.baseUrl}/api/v4/leads/${dealId}`;
    const tasksUrl = `${API_CONFIG.baseUrl}/api/v4/tasks?filter[entity_id]=${dealId}`;
    
    const [deal, tasks] = await Promise.all([
        requestManager.makeRequest(dealUrl),
        requestManager.makeRequest(tasksUrl)
    ]);

    if (deal) {
        const nearestTask = tasks?._embedded?.tasks?.[0];
        const status = getTaskStatus(nearestTask);

        document.getElementById('dealId').textContent = deal.id;
        document.getElementById('dealName').textContent = deal.name;
        document.getElementById('dealDate').textContent = formatDate(deal.created_at * 1000);
        
        const taskStatusElement = document.getElementById('taskStatus');
        taskStatusElement.innerHTML = `
            <span class="status-circle status-${status.color}"></span>
            ${status.text}
        `;
    }

    spinner.style.display = 'none';
    content.style.display = 'block';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', loadDeals); 