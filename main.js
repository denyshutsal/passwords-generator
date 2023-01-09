let generateBtn = document.querySelector(".generate-btn");
let result1 = document.querySelector(".results__field--one");
let result2 = document.querySelector(".results__field--two");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

generateBtn.addEventListener("click", getPassword);

function getPassword() {
  result1.textContent = "";
  result2.textContent = "";

  for (let i = 0; i < 15; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length)
    let randomIndex2 = Math.floor(Math.random() * characters.length)
    result1.textContent += characters[randomIndex1];
    result2.textContent += characters[randomIndex2];
  }
}