// ================Slide Testimenail=================


let testSlide = document.querySelectorAll('.testItem');

let dots = document.querySelectorAll('.dot');

var counter = 0;

function indicators(){
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(' active', '');
	}
	dots[counter].className += ' active';
}


// Code for auto sliding
function slideNext(){
	testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= testSlide.length - 1){
		counter = 0;
	}
	else{
		counter++;
	}
	testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
	indicators();
}
function autoSliding(){
	deleteInterval = setInterval(timer, 2000);
	function timer(){
		slideNext();
		indicators();
	}
}
autoSliding();
