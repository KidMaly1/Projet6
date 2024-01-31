    // to do : récupérer les valeurs du formulaire
    // to do : faire une requète à l'API

//Appel de la fonction fetch
fetch("http://localhost:5678/api/users/login"),{
    method: "POST",
    headers: {"Content-Type": "application/json" },
    body: chargeUtile
}

// 

function userLogin() {
    

    form.addEventListener("submit", function (event) {
     event.preventDefault();
    
    //Récupérer les valeurs des champs 
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
   
 
     // Objet pour la requête
     const data = {
         email:email,
         password:password,
     };
 
     //Création de la charge utile au format JSON
     const chargeUtile = JSON.stringify(data);

     //Appel de la fonction fetch
     fetch("http://localhost:5678/api/users/login"),{
         method: "POST",
         headers: {"Content-Type": "application/json" },
         body: chargeUtile
     }

 });
}



     