import * as model from './../model.js';
import { renderRequests } from './table.view.js';

// Переменные для хранения выбранных фильтров
let selectedStatus = 'all';
let selectedProduct = 'all';

// Функция для отображения всех заявок при загрузке страницы
function formShow() {
    let requests = model.getRequest();  // Получаем заявки из модели
    requests = model.changeProductName(requests);
    renderRequests(requests);  // Передаем заявки во View для отображения
    model.counterNewBadge();
}

// Функция для сохранения фильтров в localStorage
function saveFiltersToLocalStorage() {
    localStorage.setItem('selectedStatus', selectedStatus);
    localStorage.setItem('selectedProduct', selectedProduct);
}

// Функция для загрузки фильтров из localStorage
function loadFiltersFromLocalStorage() {
    selectedStatus = localStorage.getItem('selectedStatus') || 'all';
    selectedProduct = localStorage.getItem('selectedProduct') || 'all';

    // Устанавливаем выбранные фильтры в интерфейсе
    document.querySelector(`#topStatusBar a[data-value="${selectedStatus}"]`).classList.add('active');
    document.querySelector(`#productSelect option[value="${selectedProduct}"]`).selected = true;
}

// Функция для обработки фильтрации по статусу и продукту
function filterRequests() {
    let filteredRequests = model.filterRequests(selectedStatus, selectedProduct);
    filteredRequests = model.changeProductName(filteredRequests);  // Обновляем названия продуктов и статусов
    renderRequests(filteredRequests);  // Отображаем отфильтрованные заявки
}

// Функция для обработки кликов по кнопкам статуса
function handleStatusFilter(event) {
    event.preventDefault();
    selectedStatus = event.target.getAttribute('data-value');  // Обновляем выбранный статус
    filterRequests();  // Вызываем фильтрацию по двум параметрам
    updateActiveStatus(selectedStatus);
    saveFiltersToLocalStorage();  // Сохраняем фильтр в localStorage
}

// Функция для обработки изменения выбора продукта
function handleProductFilter(event) {
    selectedProduct = event.target.value;  // Обновляем выбранный продукт
    filterRequests();  // Вызываем фильтрацию по двум параметрам
    saveFiltersToLocalStorage();  // Сохраняем фильтр в localStorage
}

// Функция для обновления активного статуса
function updateActiveStatus(selectedStatus) {
    document.querySelectorAll('#topStatusBar a').forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-value') === selectedStatus) {
            el.classList.add('active');
        }
    });

    document.querySelectorAll('[data-role="left-status"]').forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-value') === selectedStatus) {
            el.classList.add('active');
        }
    });
}

// Навешиваем обработчики на кнопки фильтрации по статусу
document.querySelectorAll('#topStatusBar a').forEach(el => {
    el.addEventListener('click', handleStatusFilter);
});
document.querySelectorAll('[data-role="left-status"]').forEach(el => {
    el.addEventListener('click', handleStatusFilter);
});

// Навешиваем обработчик на выбор продукта
document.querySelector('#productSelect').addEventListener('change', handleProductFilter);

// Загружаем фильтры из localStorage при загрузке страницы
loadFiltersFromLocalStorage();

// Инициализация отображения заявок при загрузке страницы
filterRequests();  // Применяем фильтры после загрузки
model.counterNewBadge();

export { formShow };
