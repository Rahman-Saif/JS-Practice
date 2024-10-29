
const modalOverlay=document.getElementById("modalOverlay");

function openModal(){
    modalOverlay.style.display='flex';
    document.style.overflow='none';
}

function closeModal(){
    modalOverlay.style.display='none';
}

function handleConfirm(){
    modalOverlay.style.display='none';
}