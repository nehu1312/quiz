const questions=[{
    'que':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'Javascript',
    'd':'python',
    'correct':'a'
},
{
    'que':'What does CSS stands for?',
    'a':'Cyber  standard sheet',
    'b':'Cascading Style Sheet',
    'c':'Cascading Sheet Style',
    'd':'Case Standard Sheet ',
  'correct':'b'
},
{
    'que':'What does DBMS stands for?',
    'a':'Dummy base manage system',
    'b':'Database management system',
    'c':'Database manipulation system',
    'd':'Data management store ',
  'correct':'b'
},
{
  'que':'The tag for the table data is ?',
  'a':'<td>',
  'b':'<tr>',
  'c':'<th>',
  'd':'<table>',
'correct':'a'
},
{
  
    'que':'Which tag defines a paragraph?',
    'a':'<param>',
    'b':'<style>',
    'c':'<article>',
    'd':'<p>',
  'correct':'d'

}

]
let index=0;
let right=0;
let wrong=0;

let total=questions.length;
const quesbox=document.getElementById("quesbox");
const optionInputs=document.querySelectorAll(".options");

const loadQuestion=()=>{
  if(index===total){
    return endQuiz();
  }
  
  const reset=()=>{
    optionInputs.forEach((input)=>{
      input.checked=false;
      }
    
  
  )
  }
  reset();

 
  const data=questions[index];
  console.log(data);
  quesbox.innerText=data.que;
optionInputs[0].nextElementSibling.innerText=data.a;
optionInputs[1].nextElementSibling.innerText=data.b;
optionInputs[2].nextElementSibling.innerText=data.c;
optionInputs[3].nextElementSibling.innerText=data.d;
}


const submitQuiz=()=>{
  const data=questions[index];
  const ans=getAnswer()
  if (ans===data.correct){
  right++;
  }
  else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}
const getAnswer=()=>{
  let answer;
  optionInputs.forEach((input )=>{
    if(input.checked){
      answer= input.value;
    }
  }

)
return answer;

}
const endQuiz=()=>{
  
  document.getElementById("box").innerText=`
  Thankyou for playing the quiz
  ${right}/${total} is correct.
  `
  };





loadQuestion();

