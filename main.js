const messWithMeWord = document.querySelector("span.mess-with-me")
messWithMeWord.style.fontSize = "40px"

const messWithMeParagraph = document.querySelector("p.mess-with-me")
messWithMeParagraph.style.backgroundColor = "green"

const hideMePic = document.getElementById("hide-me")
hideMePic.style.display ="none"

const reSize = document.getElementById("triceratops")
reSize.style.width = "324px"

const span = document.querySelector ('span.mess-with-me');

const changeColor = function () {
    span.style.color = 'orange';
  };

  span.addEventListener ('click', changeColor);


  
const firstDino = document.getElementById("triceratops");

const changeBorder = function () {
  this.style.borderColor = 'red';
};

firstDino.addEventListener('click', changeBorder);

const fadeIt = document.getElementById("feathers");
const fadeOut = function(){
  this.style.opacity=0.5;
};

fadeIt.addEventListener("click",fadeOut);



const clickEm = document.getElementById('toggle');


const targ = document.getElementById('row');


var nowColor = '';
const flipIt = function () {
  if (nowColor == '') {
    nowColor = 'pink';
  }
  else {
    nowColor = '';
  }
  targ.style.backgroundColor = nowColor;
};
clickEm.addEventListener('click', flipIt);








const dino = document.getElementById("biggify");
const growUp=function(){
  this.style.width="200px";};
const shrink=function(){
  this.style.width="";};

dino.addEventListener("mouseover",growUp);

dino.addEventListener("mouseout",shrink);



