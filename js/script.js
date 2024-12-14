/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show*/
if(navToggle) {
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
  })
}

/* Menu hidden*/
if(navClose) {
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  })
}

/* Remove Menu Mobile*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()

/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper('.services__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 'auto', // Corrected property name

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp()


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// Function to animate the counting
function countUp(element, target, duration) {
  const increment = target / (duration / 50); // Calculate increment per interval
  let current = 0;

  const timer = setInterval(() => {
    current += increment; // Increment the current value
    if (current >= target) {
      current = target; // Cap at the target
      clearInterval(timer); // Stop the timer
    }
    element.textContent = `${Math.floor(current)}+`;  // Update the text content
  }, 50); // Run every 50ms
}

// Select all elements with the 'home__info-title' class
document.querySelectorAll('.home__info-title').forEach((title) => {
  const target = +title.getAttribute('data-target'); // Get the target from the data attribute
  countUp(title, target, 2000); // Call the countUp function with a 2-second duration
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay: 400
})

sr.reveal(`.home__content, .services__data, .services__swiper, .footer__container`)
sr.reveal(`.home__images`, {origin: 'bottom', delay:1000})
sr.reveal(`.about__images, .contact__img`, {origin: 'left'})
sr.reveal(`.about__data, .contact__data`, {origin: 'right'})
sr.reveal(`.projects__card`, {inerval: 100})