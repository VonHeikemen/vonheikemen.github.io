var input = document.querySelector('input[type="checkbox"]');

function clickEvent(e) {
  if (e)
    e.stopPropagation();

  if (input.checked) {
    input.checked = false;
  }
}

function addEvents(el) {
  el.addEventListener('click', clickEvent);
}

document.querySelectorAll('.nav__item')
  .forEach(addEvents);

document.body.addEventListener('click', function (e) {
  if (input.checked
    && e.screenY > 420
  ) {
    clickEvent();
  }

});