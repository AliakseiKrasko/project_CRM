import * as model from './../model.js';
import { renderRequests, updateNewBadge } from './table.view.js';

// Функция для отображения заявок с фильтрацией
function formShow() {
    const selectedStatus = localStorage.getItem('selectedStatus') || 'all';
    const selectedProduct = localStorage.getItem('selectedProduct') || 'all';

    let filteredRequests = model.filterRequests(selectedStatus, selectedProduct);
    filteredRequests = model.changeProductName(filteredRequests);

    renderRequests(filteredRequests);  // Отображаем заявки
    updateNewBadge(model.getRequestsCountByStatusAndProduct('new', selectedProduct));  // Обновляем счетчик "новых" заявок
}

// Обработчик для фильтрации по продукту
document.querySelector('#productSelect').addEventListener('change', function () {
    const selectedProduct = this.value;
    localStorage.setItem('selectedProduct', selectedProduct);
    formShow();  // Перерисовываем заявки после фильтрации
});

// Обработчик для фильтрации по статусу (верхняя панель)
document.querySelectorAll('[data-role="top-status"]').forEach(btn => {
    btn.addEventListener('click', function () {
        const selectedStatus = this.getAttribute('data-value');
        localStorage.setItem('selectedStatus', selectedStatus);
        formShow();  // Перерисовываем заявки после фильтрации
    });
});

// Обработчик для фильтрации по статусу (левая панель)
document.querySelectorAll('[data-role="left-status"]').forEach(btn => {
    btn.addEventListener('click', function () {
        const selectedStatus = this.getAttribute('data-value');
        localStorage.setItem('selectedStatus', selectedStatus);
        formShow();  // Перерисовываем заявки после фильтрации
    });
});

// Запуск отображения заявок при загрузке страницы
formShow();
