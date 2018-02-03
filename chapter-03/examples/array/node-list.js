const links = document.querySelectorAll('a');

console.log(Array.from(links).map(a => a.textContent));
// parce qu'on ne peut pas faire
// links.map(a => a.textContent);
