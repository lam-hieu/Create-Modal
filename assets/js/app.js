var btnOpenModal = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggleOpenModal() {
    modal.classList.toggle('hidden');
}
btnOpenModal.addEventListener('click', toggleOpenModal);
iconClose.addEventListener('click', toggleOpenModal);
btnClose.addEventListener('click', toggleOpenModal);
modal.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleOpenModal();
    }
})

