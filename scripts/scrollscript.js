const stickyDiv = document.querySelector('.sticky'); 
const stickyPoint = stickyDiv.offsetTop; 

const sticksDiv = document.querySelector('.sticks');
const sticksPoint = sticksDiv.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= stickyPoint) {
        stickyDiv.classList.add('sticky-top'); 
        sticksDiv.classList.add('sticky-back');
        document.querySelector('.textcolor').style.color = "white"; 
    } else {
        stickyDiv.classList.remove('sticky-top'); 
        sticksDiv.classList.remove('sticky-back');
        document.querySelector('.textcolor').style.color = "black";
    }
});

document.querySelector('.btn-up').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}