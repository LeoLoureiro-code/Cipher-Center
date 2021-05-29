//Add extra input for the number of shift if the user click caesar cipher
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

//Add extra input for the key if the user click vigenere cipher
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

//Get the type of encryption selected
function typeOfEncrypt(){
    var typeOfEncrypt = document.getElementsByName('cipher');
    for(var i = 0; i < typeOfEncrypt.length; i++){
        if(typeOfEncrypt[i].checked){
            encrypt(typeOfEncrypt[i].value);
        }
    }
    
}

//Send the plaintext and the extra information to the encryption method 
function encrypt(type){
    var plaintext = document.getElementById('textarea').value;
    var shift =  document.getElementById('extraInfo').value;
    switch(type){
        case "caesar":
            var textEncrypted = cipherCaesar(plaintext, shift);
            displayText(textEncrypted);
            break;
        case "vigenere":
            cipherVigenere();
            break;
    }
    
    
}

function cipherCaesar(plaintext, shift){
    ciphertext = "";
    for(var i = 0; i < plaintext.length; i++){
        if(isLetter(plaintext[i])){
            if(isUpper(plaintext[i])){
                ciphertext += cipherUpper(plaintext[i], shift);
            }else if(isLower(plaintext[i])){
                ciphertext += cipherLower(plaintext[i], shift);
            }
        }else{
            ciphertext += plaintext[i];
        }
        
           
    }
    return ciphertext;
    
}

function isUpper(letter){
    if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <=90){
       return true;
    }else{
        return false;
    }
}

function isLower(letter){
    if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <=122){
        return true;
    }else{
        return false;
    }
}

function isLetter(letter){
    if((/[a-zA-Z]/).test(letter)){
        return true;
    }else{
        return false;
    }
}
function cipherUpper(letter, shift){
    var cipherLetterNo = (letter.charCodeAt(0) + parseInt(shift) %26);
    var cipherLetter = String.fromCharCode(cipherLetterNo);
    return cipherLetter;
}

function cipherLower(letter, shift){
    var cipherLetterNo = (letter.charCodeAt(0) + parseInt(shift) %26);
    var cipherLetter = String.fromCharCode(cipherLetterNo);
    return cipherLetter;
}

function displayText(encryptedText){
    document.getElementById('textarea').value =encryptedText;
}