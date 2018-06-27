const userList = document.querySelector('#user-list');

setInterval(() => {
  fetch('/new-users')                             // <1>
    .then(response => response.text())            // <2>
    .then(data => {                               // <3>
      const now = new Date().toLocaleTimeString();
      const li = document.createElement('li');

      li.textContent = `${now} : ${data}`;
      userList.prepend(li);
    })
}, 2000);
