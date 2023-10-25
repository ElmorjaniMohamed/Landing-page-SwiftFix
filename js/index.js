

// ==========Mobile menu==========

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    
}

// ===========Search=============
const nav = document.querySelector(".nav-bar"),
 searchIcon = document.querySelector("#searchIcon");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    if(nav.classList.contains("openSearch")){
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times","uil-search");
});

// =============Dropdown Services==================
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", () => {
    dropdownMenu.classList.toggle('openDrop');
});






	


	






