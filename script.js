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