(function () {
  // Variables
  const item1 = document.querySelector('.item-1');
  const item2 = document.querySelector('.item-2');
  const item3 = document.querySelector('.item-3');
  const btn1 = document.getElementById('btn-1');
  const btn2 = document.getElementById('btn-2');
  const btn3 = document.getElementById('btn-3');

  function behaviour1(e) {
    const contentElement = e.target.parentNode.childNodes[5];
    contentElement.classList.toggle('clip-open');
    e.target.classList.toggle('btn-icon-1');

  }
  btn2.addEventListener('click', behaviour1);
  btn3.addEventListener('click', behaviour1);

})()

