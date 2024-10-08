const requests = loadRequests();

// Пример загрузки тестовых данных
class Request {
  constructor(id, name, phone, email, product) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.product = product;
    this.date = getFormattedDate();
    this.status = "new";
  }
}


// Функция для создания текущей даты и времени
function getFormattedDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");  // Месяцы начинаются с 0, поэтому добавляем +1
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

// Функция для добавления заявки к массиву requests
function addRequest(testData) {
    // Определяем ID
    const id = requests.length > 0 ? requests[requests.length - 1].id + 1 : 1;

    // Создаем заявку
    const request = new Request(
        id, 
        testData.name, 
        testData.phone, 
        testData.email, 
        testData.product
    );
    requests.push(request)

    saveRequests()
}

// Функция для сохранения заявок в localStorage
function saveRequests() {
    localStorage.setItem('requests', JSON.stringify(requests))
}

// Функция для загрузки заявок из localStorage
function loadRequests() {
    return localStorage.getItem('requests') ? JSON.parse(localStorage.getItem("requests")) : []
}

// Функция для получения всех заявок
function getRequest() {
  return requests
}


const products = {
  "course-html": "Курс по верстке",
  "course-js": "Курс по JavaScript",
  "course-vue": "Курс по VUE JS",
  "course-php": "Курс по PHP",
  "course-wordpress": "Курс по WordPress"
}

const statuses = {
  "new": "Новые",
  "inwork": "В работе",
  "complete": "Завершенные"
}

// Функция для изменения названия продукта и статуса в заявке
function changeProductName(requests) {
  return requests.map (item => {
    return {
      ...item,
      productName: products[item.product],
      statusName: statuses[item.status]
    }
  })

}

// Функция для подсчета новых заявок и отображения их в бейдже
function counterNewBadge() {
  // const requests = model.getRequest();  // Получаем все заявки
  const newRequestsCount = requests.filter(request => request.status === 'new').length;  // Считаем заявки со статусом 'new'
  
  const badgeNew = document.querySelector('#badge-new');  // Ищем элемент с id="badge-new"
  badgeNew.textContent = newRequestsCount;  // Обновляем его содержимое количеством новых заявок
}

// Функция для получения заявки по id
function getRequestById(id) {
  return requests.find((items) => items.id == id)
}

// Функция для изменения заявки по id
function updataRequest(formData) {
      const request = getRequestById(formData.get('id'))
  request.name = formData.get('name')
  request.phone = formData.get('phone')
  request.email = formData.get('email')
  request.product = formData.get('product')
  request.status = formData.get('status')

  saveRequests()
}
// Фильтрация заявок по статусу и продукту
function filterRequests(status, product) {
  let filteredRequests = requests;

  if (status !== 'all') {
      filteredRequests = filteredRequests.filter(request => request.status === status);
  }

  if (product !== 'all') {
      filteredRequests = filteredRequests.filter(request => request.product === product);
  }

  return filteredRequests;
}

// Функция для получения количества заявок по статусу и продукту
function getRequestsCountByStatusAndProduct(status, product) {
  const requests = getRequest();  // Получаем все заявки
  return requests.filter(request => {
      const matchesStatus = status === 'all' || request.status === status;
      const matchesProduct = product === 'all' || request.product === product;
      return matchesStatus && matchesProduct;
  }).length;
}


export { addRequest, getRequest, requests, changeProductName, counterNewBadge, getRequestById, updataRequest, filterRequests, getRequestsCountByStatusAndProduct }

