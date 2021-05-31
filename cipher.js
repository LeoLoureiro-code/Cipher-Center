/*
Add extra input for the number of shift if the user click caesar cipher
*/
function addShift(){
    newInputDiv = document.getElementById("extraInput");
    newInput = document.createElement("input");
    newInput.id = "extraInfo";
    newInput.type = "number";
    newInput.min = "1";
    newInput.placeholder = "Add shift";
    counter = 0;
    if(counter = 0){
        newInputDiv.appendChild(newInput);
        counter++;
    }else{
        newInputDiv.innerHTML = "";
        newInputDiv.appendChild(newInput);
    }
}

/*
Add extra input for the key if the user click vigenere cipher
*/
function addKey(){
    newInputDiv = document.getElementById("extraInput");
    newInput = document.createElement("input");
    newInput.id = "extraInfo";
    newInput.type = "text";
    newInput.placeholder = "Add key";
    counter = 0;
    if(counter = 0){
        newInputDiv.appendChild(newInput);
        counter++;
    }else{
        newInputDiv.innerHTML = "";
        newInputDiv.appendChild(newInput);
    }
}

/*
Get the type of encryption selected
*/
function typeOfEncrypt(){
    var typeOfEncrypt = document.getElementsByName('cipher');
    for(var i = 0; i < typeOfEncrypt.length; i++){
        if(typeOfEncrypt[i].checked){
            encrypt(typeOfEncrypt[i].value);
        }
    }
    
}

/*
Get the type of decryption selected
*/
function typeOfDecrypt(){
    var typeOfDecrypt = document.getElementsByName('cipher');
    for(var i = 0; i < typeOfDecrypt.length; i++){
        if(typeOfDecrypt[i].checked){
            decrypt(typeOfDecrypt[i].value);
        }
    }
}

/*
This function will check if the character is uppercase using ASCII table
*/
function isUpper(letter){
    if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <=90){
       return true;
    }else{
        return false;
    }
}

/*
This function will check if the character is lowercase using ASCII table
*/
function isLower(letter){
    if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <=122){
        return true;
    }else{
        return false;
    }
}

/*
This function will check if the character is a letter
*/
function isLetter(letter){
    if((/[a-zA-Z]/).test(letter)){
        return true;
    }else{
        return false;
    }
}

/*
Send the plaintext and the extra information to the encryption method 
*/
function encrypt(type){
    var plaintext = document.getElementById('textarea').value;
    var ExtraInfo =  document.getElementById('extraInfo').value;
    switch(type){
        case "caesar":
            var textEncryptedCaesar = encryptCaesar(plaintext, ExtraInfo);
            displayText(textEncryptedCaesar);
            break;
        case "vigenere":
            var textEncryptVigenere = encryptVigenere(plaintext, ExtraInfo);
            displayText(textEncryptVigenere);
            break;
    }
    
    
}

function decrypt(type){
    var plaintext = document.getElementById('textarea').value;
    var shift =  document.getElementById('extraInfo').value;
    switch(type){
        case "caesar":
            var textDecrypt = decryptCaesar(plaintext, shift);
            displayText(textDecrypt);
            break;
        case "vigenere":
            //decryptVigenere();
            break;
    }
}

/*
This function will remove the text in the textarea to replace it with the new encrypted/decrypted text
*/
function displayText(encryptedText){
    document.getElementById('textarea').value =encryptedText;
}

/*--------------------------------------------------Caesar Cipher----------------------------------------------------*/

/*
This function will separate the text into characters and check if they are uppercase, lowercase, or any other character. If is letter, it will call
the respective function to cipher the letter, if is not, it will add it to the string without modification.
*/
function encryptCaesar(plaintext, shift){
    ciphertext = "";
    for(var i = 0; i < plaintext.length; i++){
        if(isLetter(plaintext[i])){
            if(isUpper(plaintext[i])){
                ciphertext += ecryptCaesarUpper(plaintext[i], shift);
            }else if(isLower(plaintext[i])){
                ciphertext += ecryptCaesarLower(plaintext[i], shift);
            }
        }else{
            ciphertext += plaintext[i];
        }
        
           
    }
    return ciphertext;
    
}

function decryptCaesar(ciphertext, shift){
    plaintext = "";
    for(var i = 0; i < ciphertext.length; i++){
        if(isLetter(ciphertext[i])){
            if(isUpper(ciphertext[i])){
                plaintext += decryptCaesarUpper(ciphertext[i], shift);
            }else if(isLower(ciphertext[i])){
                plaintext += decryptCaesarLower(ciphertext[i], shift);
            }
        }else{
            plaintext += ciphertext[i];
        }
        
           
    }
    return plaintext;
    
}


/*
This function will encrypt the uppercase characters in the text using the caesar cipher adding the character code and the shift number to get a new character code, 
if the code is bigger than 90 (Z), it will substract 26 until is 90 or less
*/
function ecryptCaesarUpper(letter, shift){
    var cipherLetterNo = (letter.charCodeAt(0) + parseInt(shift) %26);
    while(cipherLetterNo > 90){
        cipherLetterNo -= 26;
    }
    var cipherLetter = String.fromCharCode(cipherLetterNo);
    return cipherLetter;
}


/*
This function will encrypt the lowercase characters in the text using the caesar cipher adding the character code and the shift number to get a new character code, 
if the code is bigger than 122 (z), it will substract 26 until is 122 or less
*/
function ecryptCaesarLower(letter, shift){
    var cipherLetterNo = (letter.charCodeAt(0) + parseInt(shift) %26);
    while(cipherLetterNo > 122){
        cipherLetterNo -= 26;
    }
    var cipherLetter = String.fromCharCode(cipherLetterNo);
    return cipherLetter;
}

/*
This function will decrypt the uppercase characters in the text using the caesar cipher substracting the character code and the shift number to get a new character code, 
if the code is lower than 65 (z), it will add 26 until is 122 or more
*/
function decryptCaesarUpper(letter, shift){
    var cipherLetterNo = (letter.charCodeAt(0) - parseInt(shift) %26);
    while(cipherLetterNo < 65){
        cipherLetterNo += 26;
    }
    var cipherLetter = String.fromCharCode(cipherLetterNo);
    return cipherLetter;
}

/*
This function will decrypt the uppercase characters in the text using the caesar cipher substracting the character code and the shift number to get a new character code, 
if the code is lower than 97 (z), it will add 26 until is 97 or more
*/
function decryptCaesarLower(letter, shift){
    var cipherLetterNo = (letter.charCodeAt(0) - parseInt(shift) %26);
    while(cipherLetterNo < 97){
        cipherLetterNo += 26;
    }
    var cipherLetter = String.fromCharCode(cipherLetterNo);
    return cipherLetter;
}



/*--------------------------------------------------Vigenere Cipher----------------------------------------------------*/ 

function fixedKey(key){
    fixKey = key.replaceAll(/[0-9] \ /g, "");
    return fixKey;
}

function encryptVigenere(plaintext, key){
    ciphertext ="";
    var cleanKey = fixedKey(key);
    console.log(cleanKey);
}