document.addEventListener('DOMContentLoaded', () => {
	//Wrapper animation
	anime.timeline({
		 targets: ".welcome",
		 easing: "easeOutExpo",
	})
	 .add({
	 width: ["0vw", "100vw"],
	 opacity: 1,
	 duration: 1400,
	})
	 .add({
	 delay: 2700,
	 translateX: "100vw",
	 duration: 1700,
	 complete: function(anime) {
		document.querySelector('.welcome').remove();
	 }
	})

	//Text animation
	anime({
		targets: ".heading",
		delay: 500,
		opacity: 1,
		duration: 1800,
		translateY: ["-31px", "0px"],
		easing: "easeOutExpo",
	});

	//Text-sm animation
	anime({
		targets: ".sub-heading",
		delay: 700,
		opacity: 1,
		duration: 1800,
		translateY: ["-31px", "0px"],
		easing: "easeOutExpo",
	});

	//Loader animation
	anime({
		targets: ".loader",
		delay: 2000,
		duration: 2400,
		width: ["0", "100%"],
		easing: "easeOutExpo",
	});

	//Loader-wrapper animation
	anime({
		targets: ".loader-wrapper",
		delay: 1500,
		duration: 1800,
		opacity: 1,
		easing: "easeOutExpo",
	});

	//Loader-wrapper animation

	anime({
		targets: ".welcome-img",
		delay: 4800,
		duration: 2800,
		translateX: ["150px", "0px"],
		opacity: 1,
		easing: "easeOutExpo",
	});

	anime({
		targets: ".logo",
		delay: 5100,
		duration: 1800,
		translateX: ["0px", "50px"],
		opacity: 1,
		easing: "easeOutExpo",
	});

	anime({
		targets: ".background",
		delay: 5400,
		duration: 2400,
		translateY: ["-60px", "0px"],
		opacity: 1,
		easing: "easeOutExpo",
	});

	anime({
		targets: ".menu-toggler",
		delay: 5800,
		duration: 1400,
		translateY: ["-30px", "0px"],
		opacity: 1,
		easing: "easeOutExpo",
	});

	anime({
		targets: ".scroll-bar",
		delay: 7000,
		duration: 2300,
		translateY: ["150px", "0px"],
		opacity: 1,
		easing: "easeOutExpo",
	});
})

