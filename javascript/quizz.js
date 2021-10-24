var questionD = document.getElementById("questionn");
var imgQuestion = document.getElementById("img-quetion");
var ansTrue = document.getElementById("answer1");
var ansFalse = document.getElementById("answer2");

var qustions = ["How many plates do you see in the picture?"
               ,"What dose the word Astronaut start with?"
                 ,"What is the result of the question in the picture?"
                 ,"How many bags in the picture?",
                 "What dose the word Corn start with?"
                 ,"How many flowers in the picture?"
                 ,"What dose the word Monkey start with?",
                "What dose the word Pie start with?"
                ,"What dose the word Volcano start with?"
                ,"What dose the word Yak start with?",
                "what is the result?","what is the result?"
                ,"what is the result?","what is the result?"
                ,"How many pencil in the picture?"];

var images = ["home-design.jpg"
              ,"42253659.jpg"
              ,"dzl7waddso.jpg"
              ,"bags.jpg"
              ,"corn.jpg"
              ,"flower.png"
              ,"monkey.jpg"
              ,"pie.jpg"
              ,"volcano.jpg"
              ,"yak.jpg"
              ,"sum_ver_2.png"
              ,"sum_ver_1.png"
              ,"mushroom.jpg"
              ,"maxresdefault.jpg"
              ,"pencil.jpg"];

var answertrue = ["4 plates"
                 ,"Latter A"
                 ,"2"
                 ,"6 bags"
                 ,"latter C"
                 ,"3 flowers"
                 ,"latter M"
                 ,"latter P"
                 ,"latter V"
                 ,"latter Y"
                 ,"6"
                 ,"9"
                 ,"4 mushroom"
                 ,"5"
                 ,"4 pencil"];

var answerFalse = ["6 plates"
                   ,"latter P"
                   ,"3"
                   ,"7 bags"
                   ,"latter W"
                   ,"5 flowers"
                   ,"latter S"
                   ,"latter R"
                   ,"latter G"
                   ,"latter Z"
                   ,"7"
                   ,"8"
                   ,"6 Mushroom"
                   ,"3"
                   ,"6 pencil"];


var numberOf = qustions.length;
var randomNumber = Math.floor(Math.random() * numberOf);
var score = 0;

function addQustionContent(){
    questionD.innerHTML = qustions[randomNumber];
    imgQuestion.src = "image/" + images[randomNumber];
    if(randomNumber % 2 === 0){
        ansTrue.innerHTML = answertrue[randomNumber];
        ansFalse.innerHTML = answerFalse[randomNumber];
    }else{
        ansTrue.innerHTML = answerFalse[randomNumber];
        ansFalse.innerHTML = answertrue[randomNumber];  
    }  
}
addQustionContent();


