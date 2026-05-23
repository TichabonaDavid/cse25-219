// Hide/show navbar on scroll
let lastScroll = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        navbar.style.top = "-120px";
    } else {
        navbar.style.top = "0";
    }
    lastScroll = currentScroll;
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navWrapper = document.getElementById("navMobileWrapper");

hamburger.addEventListener("click", () => {
    navWrapper.classList.toggle("open");
    hamburger.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navWrapper.classList.remove("open");
        hamburger.classList.remove("open");
    });
});

// login validation check
	function login() {
		let email = document.getElementById("email").value;
		let password = document.getElementById("password").value;
		let message = document.getElementById("message");
		
		let correctEmail = "automarket@gmail.com";
		let correctPassword = "automarket";
		
		if (email === correctEmail && password === correctPassword) {
			message.style.color = "white";
			message.innerText = "Login Successful!";
			setTimeout (function(){window.location.href = "index.html";}, 1000); //go to home after 1 second
		} else {
			message.style.color = "red";
			message.innerText = "Invalid email or password";
		}
	}