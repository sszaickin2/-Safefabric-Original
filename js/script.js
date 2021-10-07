function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

const color = document.querySelector('body')
const button = document.querySelector('.header__mobile-menu');
const buttonClouse = document.querySelector('.header__mobile-clouse');
const menu = document.querySelector('.header__nav');
const linkMenu = document.querySelectorAll('.header__nav-link');


button.addEventListener('click', function () {
	menu.classList.add('open');
	color.classList.add('color');
});

buttonClouse.addEventListener('click', function () {
	menu.classList.remove('open');
	color.classList.remove('color');
});

for (let i = 0; i < linkMenu.length; i++) {
	let index = i;
	linkMenu[i].addEventListener('click', function () {
		menu.classList.remove('open');
		color.classList.remove('color');
	});
}

const swiper = new Swiper('.swiper', {
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".slider-button__right",
		prevEl: ".slider-button__left",
	},
});


const catalogSlider = document.querySelectorAll('.catalog-slider');
const catalogList = document.querySelectorAll('.catalog__menu-list');


for (let i = 0; i < catalogList.length; i++) {
	let index = i;

catalogList[index].addEventListener('click', function () {

	if (catalogSlider[index].classList.contains('active')) {
		catalogSlider[index].classList.remove('active')
	} else {
		catalogSlider[index].classList.add('active')
	}
});
}
