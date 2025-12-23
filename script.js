// --- 1. MOBILE MENU TOGGLE ---
const hamburger = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

document.querySelector('.content').addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// --- 2. CONFIGURATION & DATA ---

const images = [
    'images/img1.png',   
    'images/img4.png',
    'images/img3.png',
    'images/img2.png',
    'images/img5.png'   
];

// --- 3. AUTO SLIDER ---
let autoIndex = 0;
const autoImgElement = document.getElementById('autoSlider');

function startAutoSlider() {
    autoIndex = (autoIndex + 1) % images.length;
    autoImgElement.src = images[autoIndex];
}

setInterval(startAutoSlider, 2000);

// --- 4. MANUAL SLIDER ---
let sliderIndices = {
    'manual': 0,
    'interactive': 0
};

function changeSlide(type, direction) {
    
    let imgElement;
    if (type === 'manual') {
        imgElement = document.getElementById('manualSlider');
    } 

    sliderIndices[type] += direction;

    if (sliderIndices[type] >= images.length) {
        sliderIndices[type] = 0;
    } else if (sliderIndices[type] < 0) {
        sliderIndices[type] = images.length - 1;
    }

    imgElement.src = images[sliderIndices[type]];
}

// 5. Interactive sliders
function changeSlide(type, direction) {
    let imgElement;
    
    if (type === 'manual') {
        imgElement = document.getElementById('manualSlider');
    } else {
        imgElement = document.getElementById('interactiveSlider');
    }

    sliderIndices[type] += direction;

    if (sliderIndices[type] >= images.length) {
        sliderIndices[type] = 0;
    } else if (sliderIndices[type] < 0) {
        sliderIndices[type] = images.length - 1;
    }

    imgElement.src = images[sliderIndices[type]];
    if (type === 'interactive') {
        imgElement.classList.remove('animate-pop');
        void imgElement.offsetWidth; 
        imgElement.classList.add('animate-pop');
    }
}