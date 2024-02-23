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
    modalContainer.innerHTML = '';
    for (let i = 0; i < works.length; i++) {
        
        const modalImage = document.createElement("img")
        const deleteButton = document.createElement("i")
        const modalElements = document.createElement("figure")
        
        deleteButton.classList.add("fa-solid", "fa-trash-can");
        
        modalImage.src = allworks[i].imageUrl;
        modalElements.appendChild(modalImage);
        modalElements.appendChild(deleteButton);
        modalContainer.appendChild(modalElements);

	    deleteButton.setAttribute("data-index", allworks[i].id);
        

        
        
        deleteButton.addEventListener("click", function() {
            console.log(this)
            console.log(this.getAttribute("data-index"))
            const worksId = this.getAttribute("data-index");

            fetch("http://localhost:5678/api/works/"+worksId, {
        method: "DELETE",
        headers: {"Content-Type": "application/json", 
                "Authorization":"Bearer "+localStorage.getItem("token")}
        
    }).then(function (response) {
        console.log(response)
        fetch("http://localhost:5678/api/works").then(function(response){
            return response.json();
            
        }).then(function(allworks){
            console.log(allworks)
            genererImagesModale(allworks);
            //genererTravaux(allworks);
        });

        

    })
    

        })

        
        }
}

genererImagesModale(allworks);

