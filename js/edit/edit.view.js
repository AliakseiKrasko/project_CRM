const elements = {
    form: document.querySelector('#form'),
    number: document.querySelector('#number'),
    id: document.querySelector('#id'),
    date: document.querySelector('#date'),
    product: document.querySelector('#product'),
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    phone: document.querySelector('#phone'),
    status: document.querySelector('#status'),
}

// Функция для отображения заявки в форме редактирования
function renderRequest (request) {
    elements.number.innerText = request.id;
    elements.id.value = request.id;
    elements.date.innerText = request.date;
    elements.product.value = request.product;
    elements.name.value = request.name;
    elements.email.value = request.email;
    elements.phone.value = request.phone;
    elements.status.value = request.status;
}

// Функция для получения измененных полей заявки
function redactingRequest () {
    return new FormData(elements.form)
}


export { elements, renderRequest, redactingRequest }