const images = document.querySelectorAll('.slider-image');
const prev = document.querySelector('.slider-leftArrow');
const next = document.querySelector('.slider-rightArrow');
const bullets = document.querySelectorAll('.slider-bullets--item');
const bullet = document.querySelector('.slider-bullets--item');

let current = 0;

function slider() {
	initBullets();

	for(let i = 0; i < images.length; i++) {
		images[i].classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
	
}

function initBullets() {
	for (let i = 0; i < bullets.length; i++) {
		bullets[i].classList.remove('active') ;
	}
	bullets[current].classList.add('active');
}

prev.addEventListener('click', function() {
	if(current - 1 == -1) {
		current = images.length - 1;
	} else {
		current--;
	}
	
	slider();
})

next.addEventListener('click', function() {
	if(current + 1 == images.length) {
		current = 0;
	} else {
		current++;
	}
	
	slider();
})

function bulletTog() {
	for (let i = 0; i < bullets.length; i++) {
		bullets[i].className = bullets[i].className.replace('active', '');
		}
	bullets[current - 1].className += 'active';

	// for (let i = 0; i < bullets.length; i++) {
	// 	bullets[i].className = bullets[i].className.replace('active', '');
	// }
	// 	bullets[current - 1].className += 'active';

	// for (let bullet of bullets) {
	// 	bullet.classList.remove('active'); 
	// 	bullets[current].classList.add('active');
	// }

	// for (let i = 0; i < bullets.length; i++) {
	// 	bullets[i].style.setProperty('opacity', '.3')
	//   }
	//     bullets[current].style.setProperty('opacity', '1')
	}

	const per = () => {
		for (let i = 0; i < bullets.length; i++) {
			if ( bullets[i].className == 'active' ) {
				bullets[current] = images[current];
				
			} else {
				// bullets[i].classList.add('active');
			}
		}
	}

bullet.addEventListener('click', per);












