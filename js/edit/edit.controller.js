import * as model from './../model.js'
import * as view from './edit.view.js'

// Функция инициализации страницы
function init() {
    const id = getRequestId()
    const request = model.getRequestById(id)
    view.renderRequest(request)
    submitForm()
}


// Функция для получения ID заявки из URL
function getRequestId() {
    const requestId = new URLSearchParams(window.location.search)
    return requestId.get('id')
    
}

// Функция для обработки сабмита формы
function submitForm() {
    view.elements.form.addEventListener('submit', submitFormHandler)
}

// Функция для редактирования заявки
function submitFormHandler(e) {
    e.preventDefault()
    const formData = view.redactingRequest()
    model.updataRequest(formData)
    window.location.href = '/table.html'
}

init()