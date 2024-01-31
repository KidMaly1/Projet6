
// Récupérer le token depuis le swagger
const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4";


const form = document.querySelector('formulaire');
btnSubmit = document.getElementById('login');

function userLogin() {
    
        //Récupérer les valeurs des champs 
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        //Vérification des valeurs dans les champs
        if (email.value == "string" && password.value == "string"){
            window.location.assign = ("index.html")
        }
        else {
            alert("Error")
        }
    }

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
 
     ;
  








