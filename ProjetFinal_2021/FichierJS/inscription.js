function registration() {

    var name = document.getElementById("t1").value;
    var uname = document.getElementById("t3").value;
    var pwd = document.getElementById("t4").value;
    var cpwd = document.getElementById("t5").value;

    //Expression Interdite
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert('Entrez votre nom');
        document.getElementById("t1").focus();
    } else if (!letters.test(name)) {
        alert('Votre nom doit etre composer de lettre');
    } else if (uname == '') {
        alert('Entrez votre prenom');
    } else if (!letters.test(uname)) {
        alert('Votre prenom doit etre composer de lettre');
    } else if (pwd == '') {
        alert('Entrez votre mot de passe');
    } else if (cpwd == '') {
        alert('confirmer votre mot de passe');
    } else if (!pwd_expression.test(pwd)) {
        alert('Doit etre composer de Maj Min et de characteres accentuer');
    } else if (pwd != cpwd) {
        alert('les 2 mots de passe ne matchs pas'); //Exemple Qwerasd1-
    } else if (document.getElementById("t5").value.length < 6) {
        alert('Mot de passe doit etre de 6 char');
    } else if (document.getElementById("t5").value.length > 12) {
        alert('Mot de passe ne doit pas deppaser 12 char');
    } else {
        alert("Merci Mr/Mme." + name + "de votre Inscription.Nous preparons votre voyage");
        // Redirection 
        window.location = "../HTML/Accueil.html";
    }
}

function clearFunc() {
    document.getElementById("t1").value = "";

    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
    document.getElementById("t5").value = "";
}