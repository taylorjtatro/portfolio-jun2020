let modal = document.querySelector('.modal');
let projectsModal = document.querySelector('#projects-section');
let aboutModal = document.querySelector('#about-section');
let x = document.querySelector('.x');
let projectButton = document.querySelector('.projectButton');
let aboutButton = document.querySelector('.aboutButton');


projectButton.onclick = function() {
    projectsModal.style.display = 'block';
}

aboutButton.onclick = function() {
    aboutModal.style.display = 'block';
}

x.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}