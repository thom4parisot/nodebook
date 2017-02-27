
export default function getLinkElementContent (linkElement) {
  const {href} = linkElement;           // <1>

  return fetch(href)                    // <2>
    .then(response => response.json())  // <3>
    .then(pkg => pkg.dependencies);
}
