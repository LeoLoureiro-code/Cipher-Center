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

function encrypt(){
    var typeOfEncrypt = document.getElementsByName('cipher');
}