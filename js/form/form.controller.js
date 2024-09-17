import testRandom from './form.test-data.js'
import * as view from './form.view.js'
import * as model from './../model.js'

// Функция для тестирования работы формы
function test() {
    const testData = testRandom()
    view.addListener(testData)
}

// Функция обработки сабмита формы
function submitForm(e) {
    e.preventDefault();
    const newForm = view.getFormInput()
    model.addRequest(newForm)
    view.clearForm()
    test()
}

// Функция для отслеживания изменений в полях формы
function formMonitoring() {
    view.input.form.addEventListener('submit', submitForm)
}

// Запускаем тестирование и слушаем события формы
test()
formMonitoring()
