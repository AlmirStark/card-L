//segunda
document.querySelector('#btn-segunda').addEventListener ('click', function () {
  document.querySelector('#segunda').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-segunda-back').addEventListener ('click', function () {
  document.querySelector('#segunda').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//terça
document.querySelector('#btn-terça').addEventListener ('click', function () {
  document.querySelector('#terça').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-terça-back').addEventListener ('click', function () {
  document.querySelector('#terça').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//quarta
document.querySelector('#btn-quarta').addEventListener ('click', function () {
  document.querySelector('#quarta').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-quarta-back').addEventListener ('click', function () {
  document.querySelector('#quarta').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//quinta
document.querySelector('#btn-quinta').addEventListener ('click', function () {
  document.querySelector('#quinta').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-quinta-back').addEventListener ('click', function () {
  document.querySelector('#quinta').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//sexta
document.querySelector('#btn-sexta').addEventListener ('click', function () {
  document.querySelector('#sexta').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-sexta-back').addEventListener ('click', function () {
  document.querySelector('#sexta').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

