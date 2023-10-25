// Modal component in Read More-Box1
const buttonReadMore = document.querySelector(".btn-box1");
const ReadMore = document.querySelector(".ReadMore-box");

// Open Modal

buttonReadMore.addEventListener('click', () =>{
    ReadMore.classList.toggle("openRead")
});

// Close Modal

const closeButton = document.querySelector(".close-icon")
closeButton?.addEventListener('click', () =>{
    ReadMore.classList.remove("openRead")
    
});


// Modal component in Read More-Box2
const buttonReadMore2 = document.querySelector(".btn-box2");
const ReadMore1 = document.querySelector(".ReadMore-box1");

// Open Modal

buttonReadMore2?.addEventListener('click', () =>{
    ReadMore1.classList.toggle("openRead");
});

// Close Modal
const closeButton1 = document.querySelector(".close-icon1")
closeButton1?.addEventListener('click', () =>{
    ReadMore1.classList.remove("openRead");
});	


// Modal component in Read More-Box3
const buttonReadMore3 = document.querySelector(".btn-box3");
const ReadMore2 = document.querySelector(".ReadMore-box2");

// Open Modal

buttonReadMore3?.addEventListener('click', () =>{
    ReadMore2.classList.toggle("openRead");
});

// Close Modal
const closeButton2 = document.querySelector(".close-icon2")
closeButton2?.addEventListener('click', () =>{
    ReadMore2.classList.remove("openRead");
});	