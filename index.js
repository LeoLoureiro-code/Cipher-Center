const ecryptBtn = document.getElementById('encrypt-btn');
const decrypt = document.getElementById('decrypt-btn');
const form = document.getElementById('form');


form.addEventListener("click", function(event){
    event.preventDefault()
  });


const sentenceSplitter = (plaintext) =>{
    return plaintext.split('')
}

const isLower = (letter) =>{
    if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <=122){
        return true;
    }else{
        return false;
    }
}

const isUpper = (letter) =>{
    if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <=90){
        return true;
     }else{
         return false;
     }
}

const encrypt = (letter) =>{
    console.log(letter)
}

ecryptBtn.addEventListener('click', function(){
    let ecryptedText = ""
    let plaintext = textArea = document.getElementById('textarea').value;
    let separateText = sentenceSplitter(plaintext)
    
    separateText.forEach(letter => {
        if(isLower(letter) || isUpper(letter)){
            encrypt(letter)
        }else{
            ecryptedText += letter
        }
    });
    
})
