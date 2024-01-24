
function authentification(event) {

    event.preventDefault();

    const eMail = document.getElementById("#email")
    const password = document.getElementById("#password")
    if (email=="string" && password=="string") {
        window.location.href = "index.html";
        alert("Authentification réussie");
    
    }

}

const btnConnexion = document.getElementById("#login")
btnConnexion.addEventListener ("submit", authentification);


