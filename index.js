const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generatePassword(){
let password="";
let passwordLength =15;
    for (let i=0; i<passwordLength; i++){
        let index = Math.floor(Math.random()*characters.length)
        password += characters[index]
    }
    document.getElementById("input").value=password;

}

let copy_btn=document.getElementById("copy-btn")
let inputField = document.getElementById("input")

copy_btn.addEventListener("click", ()=>{console.log
inputField.select();
document.execCommand("copy")
}
)

