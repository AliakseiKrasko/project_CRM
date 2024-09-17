import testRandom from './form.test-data.js'
import * as view from './form.view.js'
import * as model from './../model.js'

function test() {
    const testData = testRandom()
    view.addListener(testData)
}

function submitForm(e) {
    e.preventDefault();
    const newForm = view.getFormInput()
    model.addRequest(newForm)
    view.clearForm()
}

function formMonitoring() {
    view.input.form.addEventListener('submit', submitForm)
}

test()
formMonitoring()
