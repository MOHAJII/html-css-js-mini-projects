const passwordBox = document.getElementById('password');
const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbole = "!£$%&/()=?^+][]{}@#§-_";

const allChars = upperCase + lowerCase + number + symbole;

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbole[Math.floor(Math.random()* symbole.length)];

    while(password.length < length) {
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = password;
}

const copyPassword = () => {
    navigator.clipboard.writeText(passwordBox.value)
    .catch( console.error("Failed to copy password: ", e));    
}