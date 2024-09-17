// // Массив для хранения всех заявок
// let request = JSON.parse(localStorage.getItem('request')) || [];
// if (!Array.isArray(request)) {
//     request = [];
// }

// console.log(request);

// function createRecord(formRequest) {
//     const id = request.length > 0 ? request[request.length - 1].id + 1 : 1;
//     const newRecord = {
//         id: id,
//         data: getFormattedDate(),
//         name: formRequest.name.trim(),
//         title: formRequest.title.trim(),
//         phone: formRequest.phone.trim(),
//         email: formRequest.email.trim(),
//     };

//     // Добавляем новую запись в массив заявок
//     request.push(newRecord);

//     // Сохраняем обновленный массив в localStorage
//     localStorage.setItem('request', JSON.stringify(request)); // Важно для сохранения данных

//     return newRecord;
// }

// function deleteRecord(id) {
//     // Находим и удаляем запись по ID
//     request = request.filter(record => record.id !== id);

//     // Сохраняем обновленный массив в localStorage после удаления
//     localStorage.setItem('request', JSON.stringify(request));
// }



/*__________________________________________________________*/

let requests = [];

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

function getFormattedDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

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
    requests.push(request);

    console.log(request);
    console.log(requests);
}

export { addRequest}

