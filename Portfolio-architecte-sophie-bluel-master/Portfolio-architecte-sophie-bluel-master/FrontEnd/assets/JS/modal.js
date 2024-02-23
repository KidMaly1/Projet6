import { allworks, categories } from "./script.js";
console.log(categories)

// Fenêtre modale 
const modal = document.getElementById("modal");
const openModal = document.querySelector(".openModal");
const closeModal = document.getElementById("close-button");

openModal.addEventListener("click", () => {
    modal.showModal();
})

closeModal.addEventListener("click", () => {
    modal.close("close");
})

// Création des éléments de la galerie modale
const modalContainer = document.querySelector(".modalGallery")



function genererImagesModale(works) {
    for (let i = 0; i < works.length; i++) {
        
        const modalImage = document.createElement("img")
        const deleteButton = document.createElement("i")
        
        deleteButton.classList.add("fa-solid", "fa-trash-can");
        
        modalImage.src = allworks[i].imageUrl;
        modalContainer.appendChild(modalImage);
        modalContainer.appendChild(deleteButton);

        const deleteWork = document.getElementById("trashButton")
        deleteWork.addEventListener("click", () => {
            modalContainer.classList.remove(modalImage);
        })

        
        }
}

genererImagesModale(allworks);

