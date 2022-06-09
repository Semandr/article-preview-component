'use strict';
const formBlock = document.querySelector('.form');
const formBlock1 = document.querySelector('.form__content-1');
const formBlock2 = document.querySelector('.form__content-2');
const formCheckBox = document.querySelector('.form__checkbox');

formCheckBox.addEventListener('click', e => {
  const width = window.innerWidth;
  const target = e.target.checked;
  if (target && width < 500) {
    formBlock.style.backgroundColor = 'hsl(217, 19%, 35%)';
    formBlock1.classList.add('visually-hidden');
    formBlock2.classList.remove('visually-hidden', 'popup');
  }
  if ((!target && width < 500) || (!target && width > 500)) {
    formBlock.style.backgroundColor = '#fff';
    formBlock1.classList.remove('visually-hidden');
    formBlock2.classList.add('visually-hidden');
    formBlock2.classList.remove('popup');
  }
  if (target && width > 500) {
    formBlock1.classList.remove('visually-hidden');
    formBlock2.classList.remove('visually-hidden');
    formBlock2.classList.add('popup');
  }
});
