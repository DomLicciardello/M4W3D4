let searchInput = document.getElementById('searchInput');
let selectTypeSearch = document.getElementById('selectTypeSearch');
let usersTable = document.getElementById('usersTable');

let usersList;

let fetchApi = async () => {
  try {
    const risposta = await fetch('https://jsonplaceholder.typicode.com/users');
    usersList = await risposta.json();
    innerTable(usersList);

  } catch (err) {
    console.log('Error: ', err);
  }
};

window.onload = () => {
    fetchApi();
};

let innerTable = (data) => {
    data.forEach(({id, email, username, name}) => {
      usersTable.innerHTML += `<tr>
      <td>${id}</td>
      <td>${email}</td>
      <td>${username}</td>
      <td>${name}</td>
    </tr>`;
    });
  };

let filterSearch = () => {
  const inputValue = searchInput.value.trim().toLowerCase();
  const selection = selectTypeSearch.value.toLowerCase();

  const filteredArray = usersList.filter(oggetto => oggetto[selection].toLowerCase().includes(inputValue));

  usersTable.innerHTML = '';
  filteredArray.forEach(({id, email, username, name}) => {
    usersTable.innerHTML += `<tr>
    <td>${id}</td>
    <td>${email}</td>
    <td>${username}</td>
    <td>${name}</td>
  </tr>`;
  });
};

searchInput.addEventListener("input", filterSearch);