const userList = document.querySelector('#user-list');

setInterval(() => {
  fetch('/new-users')                    // <1>
    .then(response => response.text())   // <2>
    .then(data => {                      // <3>
      const li = document.createElement('li');
      li.textContent = `${new Date().toLocaleTimeString()} : ${data}`;

      userList.prepend(li);
    })
}, 2000);
