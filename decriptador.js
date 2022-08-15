function decrypt(){
    let text = document.getElementById("textInput").value;

    if(text == "" || null == text){
        alert("Por Favor ingrese Texto para Desencriptar");
        document.getElementById("noTxtFound").style.display = "block";
        document.getElementById("result").style.display = "none";
    } else{
        let decryptedText = "";
        var i = 0;
       do{

            if(text.charAt(i) + text.charAt(i+1) == "ai" || text.charAt(i) + text.charAt(i+1) == "Ai"){
                decryptedText+= charDec(text.charAt(i) + text.charAt(i+1));
                i=i+2;
            } else if(text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) + text.charAt(i+4) == "enter" || text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) + text.charAt(i+4) == "Enter"){
                decryptedText+= charDec(text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) + text.charAt(i+4));
                i=i+5;
            } else if(text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) == "imes" ||
                        text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) == "Imes" ||
                        text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) == "ober" ||
                        text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) == "Ober" ||
                        text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) == "ufat" ||
                        text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3) == "Ufat"){
                            decryptedText+= charDec(text.charAt(i) + text.charAt(i+1) + text.charAt(i+2) + text.charAt(i+3));
                i=i+4;
            } else{
                decryptedText+= text.charAt(i);
                i++;
            }
        } while(i < text.length);

        console.log(decryptedText);
        document.getElementById("noTxtFound").style.display = "none";
        document.getElementById("result").style.display = "block";

        document.getElementById("newTextConvert").value = decryptedText;

    }
}

function charDec(character){

    if(character == "ai" || character == "Ai"){
        return replaceAd(character);
    } else if(character == "enter" || character == "Enter"){
        return replaceEd(character);
    } else if(character == "imes" || character == "Imes"){
        return replaceId(character);
    } else if(character == "ober" || character == "Ober"){
        return replaceOd(character);
    } else if(character == "ufat" || character == "Ufat"){
        return replaceUd(character);
    } else{
        return character;
    }
}

function replaceAd(inChar){
    let outChar;
    if(inChar == "ai"){
        outChar = inChar.replace("ai","a");
    } else if(inChar == "Ai"){
        outChar = inChar.replace("Ai","A");
    }
    return outChar;
}

function replaceEd(inChar){
    let outChar;
    if(inChar == "enter"){
        outChar = inChar.replace("enter","e");
    } else if(inChar == "Enter"){
        outChar = inChar.replace("Enter","E");
    }
    return outChar;
}

function replaceId(inChar){
    let outChar;
    if(inChar == "imes"){
        outChar = inChar.replace("imes","i");
    } else if(inChar == "Imes"){
        outChar = inChar.replace("Imes","I");
    }
    return outChar;
}

function replaceOd(inChar){
    let outChar;
    if(inChar == "ober"){
        outChar = inChar.replace("ober","o");
    } else if(inChar == "Ober"){
        outChar = inChar.replace("Ober","O");
    }
    return outChar;
}

function replaceUd(inChar){
    let outChar;
    if(inChar == "ufat"){
        outChar = inChar.replace("ufat","u");
    } else if(inChar == "Ufat"){
        outChar = inChar.replace("Ufat","U;");
    }
    return outChar;
}