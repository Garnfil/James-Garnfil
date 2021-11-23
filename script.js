// pre loader

window.addEventListener('load', () => {
	const transition = document.querySelector('.transition');
	transition.classList.add('hide-transition');
})

// animation on scroll
const scrollElements = document.querySelectorAll('.aos');
window.addEventListener('scroll', AnimationScroll);

function AnimationScroll() {
  scrollElements.forEach( element => {
    if (isVisable(element)) element.classList.add('show-elements');
  })
}

// Function for conditioning scroll event
function isVisable(element) {
  const elementPosition = element.getBoundingClientRect();
  let distanceFromTop = -150;
  
  return elementPosition.top - window.innerHeight < distanceFromTop ? true:false;
}
