const log = (message) => {
  const text = String(message).trim();

  document.querySelector('#logs').textContent = text;
};
