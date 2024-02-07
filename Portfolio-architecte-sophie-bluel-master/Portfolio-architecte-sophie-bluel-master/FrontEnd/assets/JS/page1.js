
// Récupérer le token depuis le swagger
const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4";


const form = document.querySelector('.formulaire');
console.log(form)
const btnSubmit = document.getElementById('login');
const messageContainer = document.getElementById("formulaireMessage")

form.addEventListener("submit", userLogin )

async function userLogin(event) {
    event.preventDefault();
    
        //Récupérer les valeurs des champs 
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        

        //Vérification des valeurs dans les champs
        
        const data = {
            "email":email,
            "password":password,
    };

    //Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(data);

    
    
    //Appel de la fonction fetch
    const reponse = await fetch("http://localhost:5678/api/users/login",{
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: chargeUtile
    })

    
    console.log(reponse)
    console.log(reponse.status)
    if (
        reponse.status !== 200
    ){   
    const message =  await reponse.json();

    
    const errorMessage = document.createElement("div")
    errorMessage.innerText = message.message;
    messageContainer.appendChild(errorMessage);
    return false
    }


        else {
            window.location.assign("index.html")
            reponse.status(200).json({ jwt})

        }
        
    }

         
     ;
  
    async function userAuth(email, password) {
        // Objet pour la requête
        const data = {
                "email":email,
                "password":password,
        };

        //Création de la charge utile au format JSON
        const chargeUtile = JSON.stringify(data);

        
        
        //Appel de la fonction fetch
        const reponse = await fetch("http://localhost:5678/api/users/login",{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: chargeUtile
        })

        
        console.log(reponse)
        console.log(reponse.status)
        if (
            reponse.status !== 200
        ){   
        const message =  await reponse.json();

        const messageContainer = document.getElementById("formulaireMessage")
        const errorMessage = document.createElement("div")
        errorMessage.innerText = message.message;
        messageContainer.appendChild(errorMessage);
        return false
        }

        const message =  await reponse.json();
        console.log(message)
        alert ("Err")
        return false
        }

        






