var navbar = document.getElementById("sticky-navbar");
var lastPosition = window.pageYOffset || document.body.scrollTop;
document.addEventListener("scroll", navbarScroll);
document.addEventListener("touchmove", navbarScroll);

function navbarScroll(){
	var top = navbar.getBoundingClientRect().top;
	var position = window.pageYOffset || document.body.scrollTop;
	if(lastPosition > position){
		if(top + (lastPosition - position) < 0){
			navbar.style.top = top + (lastPosition - position)
		}else{
			navbar.style.top = 0;
		}
	}else{
		if(top + (lastPosition - position) > -60){
			navbar.style.top = top + (lastPosition - position)
		}else{
			navbar.style.top = -60;
		}
	}
	lastPosition = position;
}