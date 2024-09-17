const input = {
    form: document.querySelector('#form'),
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
}

// Функция для добавления тестовых значений в форму
function addListener(testData) {
    input.name.value = testData.name;
    input.phone.value = testData.phone;
    input.email.value = testData.email;
    input.product.value = testData.product;
}

// Функция для получения введенных значений из формы
function getFormInput() {
    return {
        name: input.name.value.trim(),
        phone: input.phone.value.trim(),
        email: input.email.value.trim(),
        product: input.product.value,
    }
}

// Функция для очистки формы после добавления заявки
function clearForm() {
    input.form.reset();
}

export { input, addListener, getFormInput, clearForm } 