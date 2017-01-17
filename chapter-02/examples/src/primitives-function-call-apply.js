const wrap = (prefix, suffix, text) => prefix + text + suffix;

console.log(wrap.call(null, '<', '>', 'title'));     // <1>
console.log(wrap.apply(null, ['<', '>', 'title']));  // <1>
