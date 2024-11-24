let navPrevButton = document.getElementById('prev'); // Capturando os botões de navegação Prev & Next
let navNextButton = document.getElementById('next'); // Capturando os botões de navegação Prev & Next
let imgSlider = document.querySelectorAll('.slide'); // Capturando o container dos sliders, que como são vários, abaixo faremos um looping pra percorrê-los.
let currentIndex = 0;

navPrevButton.addEventListener("click", getPrevSlider);
navNextButton.addEventListener("click", getNextSlider);


/*
 - Looping p/ percorrer os containers dos sliders.
 - O primeiro IF compara se o index é igual a currentIndex(zero), se for igual, coloca active.
 - 


*/
function updateSlider() {
    imgSlider.forEach((item, index) => {
        item.classList.remove("active", "prev", "next");
        if(index === currentIndex) {
            item.classList.add("active"); // Item visível
        } else if (index === (currentIndex - 1 + item.length) % item.length) {
            item.classList.add("prev"); // Item anterior
        } else if (index === (currentIndex + 1) % item.length) {
            item.classList.add("next"); // Item próximo
        }
    });
}


function getPrevSlider() {
    currentIndex = (currentIndex - 1 + imgSlider.length) % imgSlider.length; // Decrementa com loop
    updateSlider();
}

function getNextSlider() {
    console.log((currentIndex + 1) % imgSlider.length);
    currentIndex = (currentIndex + 1) % imgSlider.length; // Incrementa com loop
    updateSlider();
}

// Navegação automática
let autoSlide = setInterval(getNextSlider, 3000);

// Pausar ao passar o mouse
document.querySelector(".slider").addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

// Retomar ao sair do hover
document.querySelector(".slider").addEventListener("mouseleave", () => {
    autoSlide = setInterval(getNextSlider, 3000);
});

// Inicializa o slider
updateSlider();