let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
let que = document.getElementById('question');
let answers = document.getElementById('answers');
let questionNum = document.getElementById('questionNum');
let correctAnswer = document.getElementById('correctAnswer');
let numberOfQuestion = document.getElementById('numberOfQuestion');
let resultBtn = document.getElementById('resultBtn');
let saveBtn = document.getElementById('save');
let userAnswer = [];

let count = -1;
let totalMarks = 0;
let questionArr = [
  {
    question:'What is the national animal of India?',
    option:['Lion','Tiger','Peacock','Elephant'],
    correct:'Tiger'
  },
  {
    question:'What is the value of 2 + 2 = ?',
    option:[1,3,2,4],
    correct:4
  },
  {
    question:'What is the capital of India?',
    option:['Kolkata','Mumbai','New Delhi','Gujrat'],
    correct:'New Delhi'
  }
];

function showQuestion(count){
  answers.innerHTML='';
  questionNum.textContent = `Question ${count+1}:`;
  que.textContent=questionArr[count].question;
  createOptionList(questionArr, count);
  numberOfQuestion.textContent = `${count+1}/${questionArr.length}`
  
}
saveBtn.addEventListener('click', ()=>{
  let val = document.querySelector('input[name="answerGroup"]:checked');
  userAnswer.push(val.value);
  alert('Answer saved!');
})

resultBtn.addEventListener('click', ()=>{
  for(let i=0; i<questionArr.length; i++){
    if(userAnswer[i] === String(questionArr[i].correct)){
      totalMarks += 1;
    }
  }
  alert(`You got ${totalMarks} out of ${questionArr.length}`);
})

function createOptionList(questionArr, count){
  
  for(let i=0; i < questionArr[count].option.length; i++){
      let inputRadio = document.createElement('input');
      inputRadio.setAttribute('type','radio');
      inputRadio.setAttribute('name', 'answerGroup');
      inputRadio.setAttribute('value', questionArr[count].option[i]);
      inputRadio.setAttribute('id', `option${i+1}`);
      let label = document.createElement('label');
      label.setAttribute('for',`option${i+1}`);
      label.textContent=questionArr[count].option[i];
      let inputDiv = document.createElement('div');
      inputDiv.classList.add('inputDiv');
      inputDiv.appendChild(inputRadio);
      inputDiv.appendChild(label);
      answers.appendChild(inputDiv);
  }
}

function leftArr(){
  if(count > 0){
    count--;
    showQuestion(count);
  }
  if(count <= 0){
    leftArrow.style.display='none';
    
  }else{
    rightArrow.style.display='block';
  }
}

function rightArr(){
  if(count < questionArr.length-1){
    count++;
    showQuestion(count);
  }
  if(count === 2){
    rightArrow.style.display='none';
  }else{
    leftArrow.style.display='block';
  }
}


leftArr();
rightArr();