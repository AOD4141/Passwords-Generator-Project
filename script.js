//generate function for password generation

function passwordGenerator ()  {
    var passwordLength = 18;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+=£:;<>?[]|";
    var password = "";

    for (var i= 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random()* charset.length);
    password += charset.substring(randomNumber, randomNumber +1);
    }
    
    return password;
}

console.log(passwordGenerator ());

//Add window.onload to redirect the function to a web page

window.onload = function () {
    document.getElementById("password").innerHTML = passwordGenerator();

    function writePassword() {
        var password = document.getElementById("password"); 
        password.innerText = passwordGenerator();
        }

 //Add event listener on the generate password click

document.getElementById("generate").addEventListener("click",writePassword);
        
}