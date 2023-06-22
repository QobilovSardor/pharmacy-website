$(function() {
	$('input[name=phone]').mask('+7 (999) 999-99-99');

	$('.menu-opener').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.navbar').toggleClass('active');
	});

	$('.catalog-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.mymodal').toggleClass('modal-on');
		$('.modal-wrap').toggleClass('active');
		$('body').toggleClass('body_active');
	});
});

try {
	(function() {
		var parent = document.querySelector('.range-slider');
		if (!parent) return;

		var rangeS = parent.querySelectorAll('input[type=range]'),
			numberS = parent.querySelectorAll('input[type=number]');

		rangeS.forEach(function(el) {
			el.oninput = function() {
				var slide1 = parseFloat(rangeS[0].value),
					slide2 = parseFloat(rangeS[1].value);

				if (slide1 > slide2) {
					[ slide1, slide2 ] = [ slide2, slide1 ];
					// var tmp = slide2;
					// slide2 = slide1;
					// slide1 = tmp;
				}

				numberS[0].value = slide1;
				numberS[1].value = slide2;
			};
		});

		numberS.forEach(function(el) {
			el.oninput = function() {
				var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);

				if (number1 > number2) {
					var tmp = number1;
					numberS[0].value = number2;
					numberS[1].value = tmp;
				}

				rangeS[0].value = number1;
				rangeS[1].value = number2;
			};
		});
	})();
} catch (error) {
	console.log(error);
}
try {
	// product settings
	const openBtn = document.querySelector('#media-block__btn'),
		productSettings = document.querySelector('#media-col');

	openBtn.addEventListener('click', () => {
		console.log(productSettings);
		productSettings.classList.toggle('active-show__hide');
	});
} catch (error) {
	console.log(error);
}
try {
	var swiper = new Swiper('.mySwiper3', {
		spaceBetween: 0,
		grabCursor: true,
		breakpoints: {
			300: {
				spaceBetween: 8
			},
			375: {
				slidesPerView: 1.5,
				spaceBetween: 8
			},
			540: {
				slidesPerView: 3,
				spaceBetween: 8
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 8
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 8
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 8
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
} catch (error) {
	console.log(error);
}

try {
	var swiper = new Swiper('.mySwiper4', {
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		},
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
} catch (error) {
	console.log(error);
}
