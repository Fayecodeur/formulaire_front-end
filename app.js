// recupération des champs du formualaire
let form = document.getElementById("form");
let firstname_field = document.getElementById("prenom");
let lastname_field = document.getElementById("nom");
let email_field = document.getElementById("email");
let password_field = document.getElementById("password");
let password2_field = document.getElementById("password2");
// let password3_field = document.("password2");

form.addEventListener("submit", function(e){
    e.preventDefault();
    formCheck();
});

// creation de la fonction qui permet de verifier les données du formomulaire
function formCheck() {
    // on recupere la valeur des champs de sasie
    firstname_value = firstname_field.value.trim();
    lastname_value = lastname_field.value.trim();
    email_value = email_field.value.trim();
    password_value = password_field.value.trim();
    password_value2 = password2_field.value.trim();

    // on fait des controles sur le prenom
    if (firstname_value === "") {
        // on verifie si le champs prénom n'est pas vide
        let message = "Le prénom est obligatoire";
        setError(firstname_field, message);
    }else if(!firstname_value.match(/^[a-zA-Z]/)){
         // on verifie si le champs prénom ne commence que par des lettres
         let message = "Veuillez saisir un prénom valide";
        setError(firstname_field, message);
    }else{
        let nbrwords = firstname_value.lenght;
        if (firstname_value < nbrwords) {
         let message = "Le prénom doit avoir au moins 3 carractères";
            setError(firstname_field, message);
        } else {
            success(firstname_field);        
        }
    }
    // on fait des controles sur le prenom
    if (lastname_value === "") {
        // on verifie si le champs prénom n'est pas vide
        let message = "Le nom est obligatoire";
        setError(lastname_field, message);
    }else if(!lastname_value.match(/^[a-zA-Z]/)){
         // on verifie si le champs prénom ne commence que par des lettres
         let message = "Veuillez saisir un nom valide";
        setError(lastname_field, message);
    }else{
        success(lastname_field);        
    }

    // on fait des controles sur l'email
    if (email_value === "") {
        let message = "L'email est obligatoire";
        setError(email_field, message);
    }else if(!validateEmail(email_value)){
        let message = "L'email n'est pas valide";
        setError(email_field, message);
    }else{
        success(email_field);
    }
    // on fait des controles sur le mot de passe
    if (password_value === "") {
        let message = "Le mot de passe est obligatoire";
        setError(password_field, message);
    }else if (!validatePassword(password_value)) {
        let message = `Le mot passe est faible`;
        setError(password_field, message);
    }else{
        success(password_field);
    }

    // on fait des controles sur le mot de passe de confirmation
    if (password_value2 === "") {
        let message = "Le mot de passe est obligatoire";
        setError(password2_field, message);
    }else if (password_value !== password_value2) {
        let message = `Les mot passes ne correspondent pas`;
        setError(password2_field, message);
    }else{
        success(password2_field);
    }
    
}


// creation de la fonction qui permet d'afficher les messages d'erreurs
function setError(element, message) {
    // on recupere le champs de saisie et la balise small
    let input_control =  element.parentElement;
    let small = input_control.querySelector("small");

    small.innerText = message;
    input_control.className = "input-control error";
}

function success(element) {
    // on recupere le champs de saisie
    let input_control =  element.parentElement;
    input_control.className = "input-control success";
}
function validateEmail(email) {
    const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;;
    return regex.test(email);
}

function validatePassword(password){
    var Reg = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    return Reg.test(password);
}