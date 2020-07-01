let modal = document.querySelector('.modal');
let modals = document.querySelectorAll('.modal');
let projectsModal = document.querySelector('#projects-section');
let aboutModal = document.querySelector('#about-section');
//let x = document.querySelector('.x');
let contactModal = document.querySelector('#contact-section');


let projectButton = document.querySelector('.projectButton');
let aboutButton = document.querySelector('.aboutButton');

let contactButton = document.querySelector('.contactButton');

projectButton.onclick = function() {
    projectsModal.style.display = 'block';
}

aboutButton.onclick = function() {
    aboutModal.style.display = 'block';
}

contactButton.onclick = function() {
    contactModal.style.display = 'block';
}


//x.onclick = function() {
//    modal.style.display = 'none';
//}


/***DISPLAY NONE FOR MODALS */
window.onclick = function(e) {
    modals.forEach(el => {
        if (e.target === el) {
            el.style.display = 'none'
        }
    })
}

let xx = document.querySelectorAll('.x').forEach(el => {
    el.addEventListener('click', () => {
        modals.forEach(el => el.style.display = 'none');
    })
})

