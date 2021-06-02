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
    var extraInfo =  document.getElementById('extraInfo').value;
    switch(type){
        case "caesar":
            if(extraInfo === "" || extraInfo < 1){
                throw false;
            }
            var textEncryptedCaesar = encryptCaesar(plaintext, extraInfo);
            displayText(textEncryptedCaesar);
            break;
        case "vigenere":
            if(extraInfo === "" || checkSpecialChar(extraInfo)){
                alert("Key can only have letters");
                throw false;
            }
            var textEncryptVigenere = encryptVigenere(plaintext, extraInfo);
            displayText(textEncryptVigenere);
            break;
    }
    
    
}

function decrypt(type){
    var plaintext = document.getElementById('textarea').value;
    var shift =  document.getElementById('extraInfo').value;
    switch(type){
        case "caesar":
            var textDecryptCaesar = decryptCaesar(plaintext, shift);
            displayText(textDecryptCaesar);
            break;
        case "vigenere":
            var textDecryptVigenere = decryptVigenere(plaintext, extraInfo.value);
            console.log(textDecryptVigenere);
            displayText(textDecryptVigenere);
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
function checkSpecialChar(key){
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var digits = /\d/;
    if(format.test(key) || digits.test(key)){
      return true;
    } else {
      return false;
    }
}

//Conseguir la nueva llave correspondiente al largo del texto
function getNewKey(key, plaintext){
    var cleanPlaintext = plaintext.replaceAll(" ", "");
    var difference = Math.ceil((cleanPlaintext.length / key.length));
    var repeatKey = key.repeat(difference);
    //console.log("El tamaño del texto ",cleanPlaintext.length,"El tamaño de la llave ", repeatKey.length);
    return repeatKey;
}

function encryptVigenere(plaintext, key){
    var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var alphabetUpper = ["A","B","C","D","E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var ciphertext ="";
    var fixKey = key.replaceAll(" ", "");
    var cleanKey = getNewKey(fixKey, plaintext).toLowerCase();
    if(plaintext === "" || plaintext === null){
        alert("There is no text, or the text is null");
        throw false;
      }else if (key === "" || key === null || checkSpecialChar(key)){
        alert("There is no key, the key is null, or has special characters");
        throw false;
      }
    for(var i = 0, j = 0; i < plaintext.length; i++){
        if(isLetter(plaintext[i])){
          if(isLower(plaintext[i])){
                keyLower = cleanKey[j];
                ciphertext += alphabetLower[((alphabetLower.indexOf(plaintext[i]) + alphabetLower.indexOf(keyLower)) % 26)];
                j++;
          }else if(isUpper(plaintext[i])){ 
                keyUpper = cleanKey[j];
                ciphertext += alphabetUpper[((alphabetUpper.indexOf(plaintext[i]) + alphabetUpper.indexOf(keyUpper.toUpperCase())) % 26)];
                j++;
          }
        }
        else{
          ciphertext += plaintext[i];     
        }
      }
      return ciphertext;
}

function decryptVigenere(ciphertext, key){
    var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var alphabetUpper = ["A","B","C","D","E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var plaintext = "";
    var fixKey = key.replaceAll(" ", "");
    var cleanKey = getNewKey(fixKey, plaintext).toLowerCase();
    if(ciphertext === "" || ciphertext === null){
        alert("There is no text, or the text is null");
        throw false;
      }else if (key === "" || key === null || checkSpecialChar(key)){
        alert("There is no key, the key is null, or has special characters");
        throw false;
      }
    for(var i = 0, j = 0; i < ciphertext.length; i++){
        if(isLetter(ciphertext[i])){
          if(isLower(ciphertext[i])){
                keyLower = cleanKey[j];
                plaintext += alphabetLower[((alphabetLower.indexOf(ciphertext[i]) - alphabetLower.indexOf(keyLower) % 26))];
                console.log(plaintext);
                j++;
          }else if(isUpper(ciphertext[i])){ 
                keyUpper = cleanKey[j];
                plaintext += alphabetUpper[((alphabetUpper.indexOf(ciphertext[i]) - alphabetUpper.indexOf(keyUpper.toUpperCase()) % 26))];
                console.log(plaintext);
                j++;
          }
        }
        else{
          plaintext += ciphertext[i];     
        }
      }
      return plaintext;
}