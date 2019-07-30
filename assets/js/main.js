/**
 * function to toggle accordion
 */

const accordion = document.getElementsByTagName('accordion');
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContent = document.querySelector('.accordion-content');
const accordionArrow = document.querySelector('.arrow');

const toggleAccordion = () => {
  accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', () => {
      accordionArrow.style.transform = 'rotate(180deg)';
      accordionArrow.style.transition = 'transform .3s ease-in';
      accordionContent.classList.toggle('active');
    }, false)
  })
}
toggleAccordion();
