const connection = new EventSource('/new-users');      // <1>
const userList = document.querySelector('#user-list');

connection.addEventListener('message', ({data}) => {   // <2>
  const li = document.createElement('li');
  li.textContent = `${new Date().toLocaleTimeString()} : ${data}`;

  userList.prepend(li);
});
