
const reponse = await fetch("http://localhost:5678/api/works");
const works =  await reponse.json();


const gallerycontainer = document.querySelector(".gallery")

for (let i = 0; i < works.length; i++) {
    
    const elements = document.createElement("figure")
    gallerycontainer.appendChild(elements);

    const elementsImage = document.createElement("img");

    elementsImage.src = works[i].imageUrl;
    

    const elementsTitle = document.createElement("figcaption")
    elementsTitle.innerText = works[i].title;
    console.log(elementsTitle)
    
    
    elements.appendChild(elementsImage);
    elements.appendChild(elementsTitle);
    
    
    }

const btnTri = document.querySelector(".btn-objets")
btnTri.addEventListener("click", function () {
    const filtreObjets = works.filter(figure)
    return figure.name == "Objets";
    console.log(filtreObjets)
})




    









