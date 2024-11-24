const modals = document.querySelectorAll('.modal');
const modalContainer = document.querySelector('.modal-container');
const layer = document.querySelector('.layer-page');

modals.forEach((item) => {
    item.addEventListener("click", (e) => {
        const clickedLi = e.currentTarget;
        const img = clickedLi.querySelector('.img-modal').getAttribute("src");
        const title = clickedLi.querySelector('.title').innerHTML;
        const textP = clickedLi.querySelector('.text-p').innerHTML;
        
        modalActive(img, title, textP);      
    });
})


// Show the modal
function modalActive(img, name, paragraph) {
    layer.classList.add('active');
    document.querySelector('.modal-container').style.display = 'flex';
    layer.style.visibility = 'visible';

    buildModalContainer(img, name, paragraph);
}


// Modal Construction
function buildModalContainer(img, name, paragraph) {
    let close = document.querySelector('.close');
    let imgModalContainer = document.querySelector('.img-modal-container');
    let titleModalContainer = document.querySelector('.title-modal-container');
    let paragraphModalContainer = document.querySelector('.text-modal-container');

    imgModalContainer.src = img;
    titleModalContainer.innerHTML = name;
    paragraphModalContainer.innerHTML = paragraph;

    close.addEventListener('click', () => {
        closeModalandLayerPage();
        clearModal(imgModalContainer, titleModalContainer, paragraphModalContainer);
    });

    layer.addEventListener('click', () => {
        if(layer.classList.contains('active')) {
            closeModalandLayerPage();
            clearModal(imgModalContainer, titleModalContainer, paragraphModalContainer);
        } 
    }); 
}


// Clear fields
function clearModal(imgModalContainer, titleModalContainer, paragraphModalContainer) {
    titleModalContainer.innerHTML = '';
    paragraphModalContainer.innerHTML = '';
    imgModalContainer.src = '';
}


// Close Modal Container and Layer Page
function closeModalandLayerPage() {
    modalContainer.style.display = 'none';
    layer.style.visibility = 'hidden';
    layer.classList.remove('active');
}