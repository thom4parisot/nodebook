export function log(message, target = '#logs') {
  const text = String(message).trim();

  document.querySelector(target).textContent = text;
}
