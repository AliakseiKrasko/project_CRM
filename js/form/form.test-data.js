class formTestRandom {
    constructor(name, phone, email, product){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }
}

// Массив тестовых заявок
const testData = [
    new formTestRandom('Алексей Петров', '+123-456-7890', 'petrov@example.com', 'course-vue'),
    new formTestRandom('Андрей Серов', '+123-766-7900', 'serov@example.com', 'course-html'),
    new formTestRandom('Евгений Кузнецов', '+123-766-7900', 'kuznetsov@example.com', 'course-js'),
    new formTestRandom('Владимир Смирнов', '+123-766-7900', 'smirnov@example.com', 'course-php'),
    new formTestRandom('Игорь Тихонов', '+123-766-7900', 'tithonov@example.com', 'course-wordpress'),
    new formTestRandom('Сергей Козлов', '+123-766-7900', 'kozlov@example.com', 'course-java'),
    new formTestRandom('Алексей Михайлов', '+123-766-7900', 'mihailov@example.com', 'course-wordpress'),
];

// Функция для выбора случайной заявки
const testRandom = () => {
    const randomIndex = Math.floor(Math.random() * testData.length);
    return testData[randomIndex];
}



export default testRandom;
