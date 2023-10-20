const passwordBox = document.getElementById(password);
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";
const specialCharacters = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

const allChar = upperCase + lowerCase + number + Symbol;

function createPassword(){
    let Password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += Symbol[Math.floor(Math.random() * Symbol.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
    function copyPassword(){
        passwordBox.ariaSelected();
        document.execCommand("copy");
    }
}