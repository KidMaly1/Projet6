
const reponse = await fetch("http://localhost:5678/api/works");
const allworks =  await reponse.json();


const gallerycontainer = document.querySelector(".gallery")

function genererTravaux(works) {

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
}

genererTravaux(allworks);




const btnTous = document.querySelector(".btn-tous")
btnTous.addEventListener("click", function () {
    genererTravaux(allworks)
    
})


const btnObjets = document.querySelector(".btn-objets")
btnObjets.addEventListener("click", function () {
    
    const filtreObjets = allworks.filter((work) =>
    work.category.id == 1);
    
    document.querySelector(".gallery").innerHTML = '';

   

    genererTravaux(filtreObjets);
})

const btnAppartements = document.querySelector(".btn-appartements")
btnAppartements.addEventListener("click", function () {

    const filtreAppartements = allworks.filter((work) =>
    work.category.id == 2);

    document.querySelector(".gallery").innerHTML = '';

    genererTravaux(filtreAppartements);
    
    
})

const btnHotels = document.querySelector(".btn-hotels")
btnHotels.addEventListener("click", function () {

    const filtreHotels = allworks.filter((work) =>
    work.category.id == 3);

    document.querySelector(".gallery").innerHTML = '';

    genererTravaux(filtreHotels);
    
    
})

    









