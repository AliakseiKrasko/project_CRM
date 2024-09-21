// Функция для рендеринга заявок в таблице
function renderRequests(requests) {
  const requestList = document.querySelector("#tbody");
  requestList.innerHTML = ""; // Очищаем таблицу

  const bages = {
      new: 'badge-danger',
      inwork: 'badge-warning',
      complete: 'badge-success',
  };

  // Отрисовываем заявки в таблице
  requests.forEach((request) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${request.id}</td>
          <td>${request.date}</td> 
          <td>${request.productName}</td>
          <td>${request.name}</td>
          <td>${request.email}</td>
          <td>${request.phone}</td>
          <td>${request.statusName}</td>
          <td>
              <div class="badge badge-pill ${bages[request.status]}">${request.statusName}</div>
          </td>
          <td>
              <a href="edit.html?id=${request.id}">Редактировать</a>
          </td>
      `;
      requestList.appendChild(row);
  });
}

// Функция для обновления бейджа с количеством "новых" заявок
function updateNewBadge(count) {
  const badgeNew = document.querySelector('#badge-new');
  badgeNew.textContent = count;
}

export { renderRequests, updateNewBadge };
