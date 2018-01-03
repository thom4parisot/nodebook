let ws = new WebSocket('ws://localhost:4000/users');    // <1>
const userList = document.querySelector('#user-list');
let interval;

ws.addEventListener('open', () => {
  interval = setInterval(() => {
    ws.send(JSON.stringify({ action: 'getName' }));     // <2>
  }, 2000);
});

ws.addEventListener('message', ({data}) => {            // <3>
  const li = document.createElement('li');
  li.textContent = `${new Date().toLocaleTimeString()} : ${data}`;

  userList.prepend(li);
});

ws.addEventListener('close', () => {
  ws = null;
  clearInterval(interval);
});
