const input = {
    form: document.querySelector('#form'),
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
}

function addListener(testData) {
    input.name.value = testData.name;
    input.phone.value = testData.phone;
    input.email.value = testData.email;
    input.product.value = testData.product;
}

function getFormInput() {
    return {
        name: input.name.value.trim(),
        phone: input.phone.value.trim(),
        email: input.email.value.trim(),
        product: input.product.value,
    }
}

function clearForm() {
    input.form.reset();
}

export { input, addListener, getFormInput, clearForm } 