'use strict';
const formBlock = document.querySelector('.form');
const formBlock1 = document.querySelector('.form__content-1');
const formBlock2 = document.querySelector('.form__content-2');
const formCheckBox = document.querySelector('.form__checkbox');

formCheckBox.addEventListener('click', e => {
  if (e.target.checked) {
    formBlock1.classList.add('visually-hidden');
    formBlock2.classList.remove('visually-hidden');
    formBlock.style.backgroundColor = 'hsl(217, 19%, 35%)';
  }
  if (!e.target.checked) {
    formBlock1.classList.remove('visually-hidden');
    formBlock2.classList.add('visually-hidden');
    formBlock.style.backgroundColor = '#fff';
  }
});
