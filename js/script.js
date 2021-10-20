"use strict"

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
const menu = document.querySelector('.header__nav');
const linkMenu = document.querySelectorAll('.header__nav-link');
const mainContent = document.querySelector('.main');
const button = document.querySelector('.hamburger');

button.addEventListener('click', function () {
	button.classList.toggle('hamburger2');
	menu.classList.toggle('open');
	color.classList.toggle('color');
});

mainContent.addEventListener('click', function () {
	menu.classList.remove('open');
	button.classList.remove('hamburger2');
	color.classList.remove('color');
});

for (let i = 0; i < linkMenu.length; i++) {
	let index = i;
	linkMenu[i].addEventListener('click', function () {
		menu.classList.remove('open');
		color.classList.remove('color');
		button.classList.remove('hamburger2');
	});
}

const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: ".slider-button__right",
		prevEl: ".slider-button__left",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	spaceBetween: 30,
});

const reviews = new Swiper('.slider', {
	navigation: {
		nextEl: ".neopren-button__right",
		prevEl: ".neopren-button__left",
	},
	spaceBetween: 20,
	slidesPerView: 4,
	effect: "slide",
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 4,
		},

	}
})


const catalogSlider = document.querySelectorAll('.catalog-slider');
const catalogList = document.querySelectorAll('.catalog__menu-list');

for (let i = 0; i < catalogList.length; i++) {

	catalogList[i].addEventListener('click', function () {

		for (let i = 0; i < catalogSlider.length; i++) {
			catalogSlider[i].classList.remove('active')
			catalogList[i].classList.remove('background')
		}

		catalogSlider[i].classList.add('active')
		catalogList[i].classList.add('background')
	});

}

const textButton = document.querySelectorAll('.question__info');
const textOpen = document.querySelectorAll('.question__text-lock');
const angleDown = document.querySelectorAll('.fa-angle-down');
const angleUp = document.querySelectorAll('.fa-angle-up')

for (let i = 0; i < textButton.length; i++) {
	let index = i;

	textButton[index].addEventListener('click', function () {
		textOpen[index].classList.toggle('text__open');
		angleDown[index].classList.toggle('angle__clous');
		angleUp[index].classList.toggle('angle__up');
	});

}

const infoButton = document.querySelector('.info__open-button');
const infoText = document.querySelector('.info__clouse-text');

if (infoButton) {
	infoButton.addEventListener('click', function () {
		infoText.classList.toggle('info__open-text');
	});
}



window.addEventListener("DOMContentLoaded", handleWindowLoad);

function handleWindowLoad() {

	const video = document.querySelector('.production__video-content');
	const playButton = document.querySelector('.production__play');
	const videoInfo = document.querySelector('.info__video-content');
	const infoPlay = document.querySelector('.info-button__play');

	playButton.addEventListener('click', Play_Pause_Video);

	function Play_Pause_Video() {
		if (video.paused === true) {
			video.play();
			playButton.classList.add('clouse')
		}
		video.addEventListener('click', function () {
			video.pause();
			playButton.classList.remove('clouse')
		});
	}

	infoPlay.addEventListener('click', Play_Video_Info);
	
	function Play_Video_Info() {
		if (videoInfo.paused === true) {
			videoInfo.play();
			infoPlay.classList.add('clouse')
		}
		videoInfo.addEventListener('click', function () {
			videoInfo.pause();
			infoPlay.classList.remove('clouse')
		});
	}

}

