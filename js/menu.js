const menuButton = document.querySelector(".menu-button");
const menuButton1 = document.querySelector(".menu-button1");
const menuOverlay = document.querySelector(".menu-overlay");
const menuIcon = document.querySelector(".menu__icon");

menuButton.addEventListener("click", function () {
    let src = menuIcon.getAttribute("src");
    if (src == './assets/img/icons/menu_icon.svg') {
        menuIcon.setAttribute('src','./assets/img/icons/menu_close.svg');
        menuIcon.style.position = 'fixed';
    } else {
        menuIcon.setAttribute('src','./assets/img/icons/menu_icon.svg');
        menuIcon.style.position = 'relative';
    }
    menuOverlay.classList.toggle("open");
});


