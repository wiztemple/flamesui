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

// modal
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.button-click');
const cancelButtons = document.querySelectorAll('.close-modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = [...modals].find(modal => modal.dataset.id === button.dataset.target)
    modal.style.display = 'block';
  });
});

cancelButtons.forEach(cancelButton => {
  cancelButton.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
  })
})
// dismiss modal when the window is clicked
document.addEventListener('click', e => {
  modals.forEach(modal => {
    if (modal.style.display === 'block') {
      if (e.target.className === 'modal') {
        modal.style.display = 'none';
      }
    }
  });
})
