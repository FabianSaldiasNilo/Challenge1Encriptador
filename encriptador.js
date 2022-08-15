function encrypt(){
    let text = document.getElementById("textInput").value;

    if(text == "" || null == text){
        alert("Por Favor ingrese Texto para Encriptar");
        document.getElementById("noTxtFound").style.display = "block";
        document.getElementById("result").style.display = "none";
    } else{
        let encryptedtext = "";
        for(i = 0; i < text.length; i++){
            encryptedtext+= charEnc(text.charAt(i));
        }
        console.log(encryptedtext);
        document.getElementById("noTxtFound").style.display = "none";
        document.getElementById("result").style.display = "block";

        document.getElementById("newTextConvert").value = encryptedtext;

    }
}

function charEnc(character){
    if(character == "a" || character == "A"){
        return replaceA(character);
    } else if(character == "e" || character == "E"){
        return replaceE(character);
    } else if(character == "i" || character == "I"){
        return replaceI(character);
    } else if(character == "o" || character == "O"){
        return replaceO(character);
    } else if(character == "u" || character == "U"){
        return replaceU(character);
    } else{
        return character;
    }
}

function replaceA(inChar){
    let outChar;
    if(inChar == "a"){
        outChar = inChar.replace("a","ai");
    } else if(inChar == "A"){
        outChar = inChar.replace("A","Ai");
    }
    return outChar;
}

function replaceE(inChar){
    let outChar;
    if(inChar == "e"){
        outChar = inChar.replace("e","enter");
    } else if(inChar == "E"){
        outChar = inChar.replace("E","Enter");
    }
    return outChar;
}

function replaceI(inChar){
    let outChar;
    if(inChar == "i"){
        outChar = inChar.replace("i","imes");
    } else if(inChar == "I"){
        outChar = inChar.replace("I","Imes");
    }
    return outChar;
}

function replaceO(inChar){
    let outChar;
    if(inChar == "o"){
        outChar = inChar.replace("o","ober");
    } else if(inChar == "O"){
        outChar = inChar.replace("O","Ober");
    }
    return outChar;
}

function replaceU(inChar){
    let outChar;
    if(inChar == "u"){
        outChar = inChar.replace("u","ufat");
    } else if(inChar == "U"){
        outChar = inChar.replace("U","Ufat;");
    }
    return outChar;
}