
const reponse = await fetch("http://localhost:5678/api/works");
const pieces =  await reponse.json();
console.log(pieces)

const apiSophie = "http://localhost:5678/api-docs/#/default/get_works"
fetch(apiSophie)
.then (response) => {
    console.log(response)
}