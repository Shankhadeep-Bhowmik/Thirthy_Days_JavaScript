let outputText = document.getElementById('outputText');
let generateBtn = document.getElementById('generateBtn');
let rangeSlide = document.getElementById('rangeSlide');
let p = document.getElementById('rangeVal');
let capitalVal = document.getElementById('capitalVal');
let lowerVal = document.getElementById('lowerVal');
let numericVal = document.getElementById('numericVal');
let symbolVal = document.getElementById('symbolVal');
let combinedStrings="";
let password = "";
let copyBtn = document.getElementById('copyBtn');
let upperVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890";
let sym = "!@#$%^&*(){}|_\./-";

generateBtn.addEventListener('click', () => {
  if(capitalVal.checked === false && lowerVal.checked === false && numericVal.checked === false && symbolVal.checked === false){
    alert("Select the options to build password");
    return;
  }
 
  if(capitalVal.checked){
    for(let i=0; i<upperVal.length; i++){
      combinedStrings += upperVal[i];
    } 
  }
  if(lowerVal.checked){
    for(let i=0; i<lower.length; i++){
      combinedStrings += lower[i];
    } 
  }
  if(numericVal.checked){
    for(let i=0; i<num.length; i++){
      combinedStrings += num[i];
    } 
  }
  if(symbolVal.checked){
    for(let i=0; i<sym.length; i++){
      combinedStrings += sym[i];
    } 
  }
   
  for(let i=0; i<rangeSlide.value; i++){
    let index = randNum(combinedStrings.length);
    password += combinedStrings[index];
  }

outputText.value = password;
password=""
combinedStrings=""
});

rangeSlide.oninput =() =>{
  p.innerHTML = rangeSlide.value;
}

function randNum(length){
  return Math.floor(Math.random()*length);
}
function copyText(){
  navigator.clipboard.writeText(outputText.value);
  copyBtn.textContent = 'Copied';
}
