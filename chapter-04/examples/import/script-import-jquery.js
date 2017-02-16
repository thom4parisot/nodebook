import $ from 'jquery';

console.log($.fn.jquery);  // <1>

$(document).ready(() => {
  $('#logs').text('OK');   // <2>
});
