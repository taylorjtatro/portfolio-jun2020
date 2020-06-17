let modal = document.querySelector('#projects-section');
let x = document.querySelector('.x');
let projectButton = document.querySelector('.projectButton');
console.log(projectButton)

projectButton.onclick = function() {
    modal.style.display = 'block';
}

x.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}