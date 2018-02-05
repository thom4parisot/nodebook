const json_object = '{ "title": "Node.js", "price_tag": 32 }';
const json_string = '"Hello World!"';
const json_number = '32';

console.log(JSON.parse(json_string)); // <1>
console.log(JSON.parse(json_number)); // <2>
console.log(JSON.parse(json_object)); // <3>
