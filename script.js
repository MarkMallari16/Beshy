const convertBeshy = document.getElementById("convert").addEventListener("click", () =>{
    let text = document.getElementById("text").value;
    let inputResult = document.getElementById("inputResult");
    let beshyText;
    const beshyEmoji  = "🤸";
    
    if (text.match(/\s/g)){
        beshyText = text.replace(/\s/g, beshyEmoji);
        inputResult.value = beshyText;
    }else{
        inputResult.value = "You must enter space first!";
    }
});

const clear = document.getElementById("clear").addEventListener("click", () =>{
    let text = document.getElementById("text");
    let inputResult = document.getElementById("inputResult");
    
    text.value = "";
    inputResult.value = "";
   
});

const copy = document.getElementById("copyClipboard").addEventListener("click", () => {
    let inputResult = document.getElementById("inputResult");
    let textCopy = inputResult.value;
   
    if (navigator.clipboard && textCopy){
        navigator.clipboard.writeText(textCopy)
            .then(() =>{
                alert("Text copied to clipboard");
            }).catch((error) =>{
                console.error("Error to copying text to clipboard: " , error);
            });
    }
});
