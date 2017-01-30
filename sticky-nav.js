var navbar = document.getElementById("sticky-navbar");
var lastPosition = window.pageYOffset;
document.addEventListener("scroll", navbarScroll);
document.addEventListener("touchmove", navbarScroll);

function navbarScroll(){
	var top = navbar.getBoundingClientRect().top;
	if(lastPosition > window.pageYOffset){
		if(top + (lastPosition - window.pageYOffset) < 0){
			navbar.style.top = top + (lastPosition - window.pageYOffset)
		}else{
			navbar.style.top = 0;
		}
	}else{
		if(top + (lastPosition - window.pageYOffset) > -60){
			navbar.style.top = top + (lastPosition - window.pageYOffset)
		}else{
			navbar.style.top = -60;
		}
	}
	lastPosition = window.pageYOffset;
}