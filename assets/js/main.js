/**
 * function to toggle accordion
 */
const accordions = document.querySelectorAll('.accordion');
const toggle = () => {
  accordions.forEach(accordion => {
    const accordionHeader = accordion.querySelector('.accordion-header');
    accordionHeader.addEventListener('click', () => {
      accordion.classList.toggle('active');
    }, false)
  })
}
toggle();

/**
 * function to toggle a custom select
 */
// const selectItems = document.querySelectorAll('.select-item');
// const toggleSelect = () => {
//   selectItems.forEach(selectItem => {
//     const inputField = selectItem.querySelector('.input-field');
//     inputField.addEventListener('click', () => {
//       selectItem.classList.toggle('active');
//     }, false)
//   })
// }
// toggleSelect();

const selectItems = document.querySelectorAll('.flames-select');
const toggleSelect = () => {
  selectItems.forEach(selectItem => {
    const inputField = selectItem.querySelector('.input-field');
    const icon = selectItem.querySelector('.icon-right');
    const ul = selectItem.querySelector('.select-item');
    inputField.addEventListener('click', () => {
      ul.classList.toggle('active');
      icon.classList.toggle('active');
    })
  })
}
toggleSelect();


const alertInfo = Array.from(document.getElementsByClassName('alert-info'))[0];

document.addEventListener('DOMContentLoaded', () => {
  const alert = document.getElementById('pos-absolute');
  alert.style.display = 'block';

  setTimeout(() => {
    alert.classList.replace('slideIn', 'fadeOut');
    alert.style.display = 'none';
  }, 4000)
});
