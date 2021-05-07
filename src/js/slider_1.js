window.addEventListener('DOMContentLoaded', function() {
	let slideIndex = 1,
		   slides = document.querySelectorAll('.slider-image'),
		   prev = document.querySelector('.slider-leftArrow'),
		   next = document.querySelector('.slider-rightArrow'),
		   dotsWrap = document.querySelector('.slider-bullets'),
		   dots = document.querySelectorAll('.slider-bullets--item');
		   links = document.querySelectorAll('.projects-header__link');
		   linksWrap = document.querySelector('.projects-header');
	
	   showSlides(slideIndex);
	
	   function showSlides(n) {
	
		   if (n > slides.length) {
			   slideIndex = 1;
		   }
		   if (n < 1) {
			   slideIndex = slides.length;
		   }
	
		   slides.forEach((item) => item.style.display = 'none');
		  
		   dots.forEach((item) => item.classList.remove('active'));
		   links.forEach((item) => item.classList.remove('active'));
	
		   slides[slideIndex - 1].style.display = 'block';
		   dots[slideIndex - 1].classList.add('active');
		   links[slideIndex - 1].classList.add('active');
	   }
	
	   function plusSlides(n) {
		   showSlides(slideIndex += n); 
	   }
	   function currentSlide(n) {
		   showSlides(slideIndex = n);
	   }
	
	   prev.addEventListener('click', function() {
		   plusSlides(-1);
	   });
	
	   next.addEventListener('click', function() {
		   plusSlides(1);
	   });
	
	   dotsWrap.addEventListener('click', function(event) {
		   for (let i = 0; i < dots.length + 1; i++) {
			   if (event.target.classList.contains('slider-bullets--item') && event.target == dots[i-1]) {
				   currentSlide(i);
			   }
		   }
	   });

	   linksWrap.addEventListener('click', function(event) {
		   event.preventDefault();
		for (let i = 0; i < links.length + 1; i++) {
			if (event.target.classList.contains('projects-header__link') && event.target == links[i-1]) {
				currentSlide(i);
			}
		}
	});
   });