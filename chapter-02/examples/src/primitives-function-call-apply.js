var wrap = function(prefix, suffix, text) {
  return prefix + text + suffix;
};

console.log(wrap.call(null, '<', '>', 'title'));     // <1>
console.log(wrap.apply(null, ['<', '>', 'title']));  // <1>
