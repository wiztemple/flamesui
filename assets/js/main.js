/**
 * function to toggle accordion
 */
const accordions = document.querySelectorAll('.accordion');
const toggle = () => {
  // const accordionContent = document.getElementsByTagName('accordion-content');
  accordions.forEach(accordion => {
    const accordionHeader = accordion.querySelector('.accordion-header');
    accordionHeader.addEventListener('click', () => {
      accordion.classList.toggle('active');
    }, false)
  })
}
toggle();

