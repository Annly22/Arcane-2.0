const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggle.addEventListener('click', () =>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
 window.onload = function() {
        var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
        shadowRoot.querySelector('#logo').remove();
    };

