'use strict';

const {safeHtml} = require('common-tags');
const text = '<script>alert(document.cookie)</script>';

console.log(
  `<div class="user-content">
  ${text}
</div>`,
); // <1>

console.log(
  safeHtml`<div class="user-content">
  ${text}
</div>`,
); // <2>
