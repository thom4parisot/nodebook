export function log (message, target = '#logs') {
  document.querySelector(target).textContent = String(message).trim();
}
