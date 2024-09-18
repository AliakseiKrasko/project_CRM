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


// Функция для создания текущей даты
function getFormattedDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
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



function changeProductName(requests) {
  return requests.map (item => {
    return {
      ...item,
      productName: products[item.product],
      statusName: statuses[item.status]
    }
  })

}

function counterNewBadge() {
  // const requests = model.getRequest();  // Получаем все заявки
  const newRequestsCount = requests.filter(request => request.status === 'new').length;  // Считаем заявки со статусом 'new'
  
  const badgeNew = document.querySelector('#badge-new');  // Ищем элемент с id="badge-new"
  badgeNew.textContent = newRequestsCount;  // Обновляем его содержимое количеством новых заявок
}

export { addRequest, getRequest, requests, changeProductName, counterNewBadge }

