const connection = new EventSource('/new-users');     // <1>
const userList = document.querySelector('#user-list');

connection.addEventListener('message', ({data}) => {  // <2>
  const now = new Date().toLocaleTimeString();
  const li = document.createElement('li');

  li.textContent = `${now} : ${data}`;
  userList.prepend(li);
});
