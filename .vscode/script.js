function passwordGenerator ()  {
    var passwordLength = 13;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    var password = "";

for (var i= 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()* charset.length);
password += charset.substring(randomNumber, randomNumber +1);
}

return password;
}

console.log(passwordGenerator());

window.onload = function () {
document.getElementById("password").innerHTML = passwordGenerator();

function writePassword() {
var password = document.getElementById("password"); 
password.innerText = passwordGenerator();
}



document.getElementById("generate").addEventListener("click",writePassword);
}