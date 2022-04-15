document.addEventListener("DOMContentLoaded", function () {
	let sliderFireSafety = new Swiper(".slider-fire-safety__container", {
		slidesPerView: 1,
		spaceBetween: 25,
		watchOverflow: true,

		navigation: {
			nextEl: ".slider-fire-safety__next",
			prevEl: ".slider-fire-safety__prev",
		},

		pagination: {
			el: ".slider-fire-safety__pagination",
			type: "fraction",
		},

		breakpoints: {
			//   640: {
			//     slidesPerView: 4,
			//     spaceBetween: 40
			//   }
		},
	});

	let sliderСooperation = new Swiper(".tab-cooperation__slider", {
		slidesPerView: 3,
		spaceBetween: 30,
		watchOverflow: true,
		observeParents: true,
		observeSlideChildren: true,
		observer: true,

		navigation: {
			nextEl: ".tab-cooperation__slider-next",
			prevEl: ".tab-cooperation__slider-prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 6,
			},
			500: {
				slidesPerView: 4,
			},
		},
	});

	let buttonSlides = document.querySelectorAll(".tab-cooperation__tab-button");

	if (buttonSlides.length > 0) {
		buttonSlides.forEach((el) => {
			el.addEventListener("click", function () {
				setTimeout(() => {
					sliderСooperation.updateSlides();
					sliderСooperation.slideTo(sliderСooperation.clickedIndex, 300, false);
				}, 320);
			});
		});
	}

	let arrSlidersCoopIcon = document.querySelectorAll(".coop-slider-icon");

	if (arrSlidersCoopIcon.length > 0) {
		arrSlidersCoopIcon.forEach((element) => {
			let sliderEl = element.querySelector(".coop-slider-icon__container");
			let sliderPrev = element.querySelector(".coop-slider-icon__next");
			let sliderNext = element.querySelector(".coop-slider-icon__prev");

			let sliderCoopIcon = new Swiper(sliderEl, {
				slidesPerView: 3,
				spaceBetween: 10,
				watchOverflow: true,
				observeParents: true,
				observeSlideChildren: true,
				observer: true,

				navigation: {
					nextEl: sliderPrev,
					prevEl: sliderNext,
				},

				breakpoints: {
					1500: {
						spaceBetween: 30,
						slidesPerView: 4,
					},

					500: {
						slidesPerView: 4,
					},
				},
			});
		});
	}
});

$(document).ready(function () {
	// Скрипт табов
	$(".js-tab").on("click", function (e) {
		e.preventDefault();

		let elementId = $(this).attr("href");

		$(this).parents(".js-tab-container").find(".js-tab").removeClass("active");

		$(this).addClass("active");

		new Promise((resolve, reject) => {
			$(elementId).parents(".js-tab-container").find(".js-tab-item").removeClass("active");
			setTimeout(() => {
				$(elementId).parents(".js-tab-container").find(".js-tab-item").css({ display: "none" });
				resolve();
			}, 200);
		}).then(() => {
			setTimeout(() => {
				$(elementId).addClass("active");
			}, 100);

			$(elementId).css({ display: "block" });
		});
	});

	$(".js-tab").eq(0).click();

	//УДАЛИТЬ---------------------------------

	$(".lightgallery").lightGallery({
		selector: "a",
	});

	// Anchor

	$(".submenu-list__item, .breadcrumbs-menu__item").on("click", "a", function (event) {
		//        event.preventDefault();
		var id = $(this).attr("href"),
			top = $(id).offset().top - 120;
		$("body,html").animate(
			{
				scrollTop: top,
			},
			1000
		);
	});

	//УДАЛИТЬ---------------------------------
});
