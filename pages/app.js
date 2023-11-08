const firstParallax = document.getElementById('parallaxOne');
const secondParallax = document.getElementById('parallaxTwo');

const firstImg = [
    'url(\'./images/hokusaip1.jpg\')',
    'url(\'./images/hokusaip2.jpg\')',
    'url(\'./images/hokusaip3.jpg\')',
    'url(\'./images/hokusaip4.jpg\')',
    'url(\'./images/hokusaip5.jpg\')'
];
const secondImg = [
    'url(\'./images/hokusai1.jpg\')',
    'url(\'./images/hokusai2.jpg\')',
    'url(\'./images/hokusai3.jpg\')',
    'url(\'./images/hokusai4.jpg\')',
    'url(\'./images/hokusai5.jpg\')'
];

// first parallax
document.addEventListener('scroll', () => {
    let offset = window.scrollY;
    firstParallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

// cursor
const cursor = document.querySelector('.cursor');
let timeout;

document.addEventListener('pointermove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    // para que vuelva a aparecer
    cursor.style.display = 'block';

    // cursor effect on mouse stopped
    const mouseStopped = () => {
        cursor.style.display = 'none';
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 7000);
});

document.addEventListener('pointerout', () => {
    cursor.style.display = 'none';
});

// random img
const randomImg = () => {
    return Math.floor(Math.random() * 5);
}

window.addEventListener('load', (e) => {
    firstParallax.style.backgroundImage = firstImg[randomImg()];
    secondParallax.style.backgroundImage = secondImg[randomImg()];
})