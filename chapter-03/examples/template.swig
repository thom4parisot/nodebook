<!DOCTYPE html>
<html>
<head>
  <title>{{ title | default('Template demo') | capitalize }}</title>
</head>
<body>
{% set items = ['Node.js', 'CSS maintenables', 'Open Sky'] -%}
<ul>
{% for item in items|sort -%}
  <li>{{ item }}</li>
{% endfor -%}
</ul>
</body>
</html>
