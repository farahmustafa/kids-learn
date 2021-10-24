var numberOfButton = document.querySelectorAll(".letter").length;

for(var i=0; i< numberOfButton; i++){
    document.querySelectorAll(".letter")[i].addEventListener("click", function(){

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnamation(event.key);
 }) ;

function makeSound(key){
    switch(key){
        case "a":
            var tom1 = new Audio('lettersound/A.mp3');
            tom1.play(); 
        break;  
        case "b":
            var tom2 = new Audio('lettersound/B.mp3');
            tom2.play(); 
        break;
        case "c":
            var tom3 = new Audio('lettersound/C.mp3');
            tom3.play(); 
        break;
        case "d":
            var tom4 = new Audio('lettersound/D.mp3');
            tom4.play(); 
        break;
        case "e":
            var tom5 = new Audio('lettersound/E.mp3');
            tom5.play(); 
        break; 
        case "f":
            var tom6 = new Audio('lettersound/F.mp3');
            tom6.play(); 
        break;
        case "g":
            var tom7 = new Audio('lettersound/G.mp3');
            tom7.play(); 
        break; 
        case "h":
            var tom8 = new Audio('lettersound/H.mp3');
            tom8.play(); 
        break;
        case "i":
            var tom9 = new Audio('lettersound/I.mp3');
            tom9.play(); 
        break;
        case "j":
            var tom10 = new Audio('lettersound/J.mp3');
            tom10.play(); 
        break;
        case "k":
            var tom11 = new Audio('lettersound/K.mp3');
            tom11.play(); 
        break;
        case "l":
            var tom12 = new Audio('lettersound/L.mp3');
            tom12.play(); 
        break;
        case "m":
            var tom13 = new Audio('lettersound/M.mp3');
            tom13.play(); 
        break;
        case "n":
            var tom14 = new Audio('lettersound/N.mp3');
            tom14.play(); 
        break; 
        case "o":
            var tom15 = new Audio('lettersound/O.mp3');
            tom15.play(); 
        break; 
        case "p":
            var tom16 = new Audio('lettersound/P.mp3');
            tom16.play(); 
        break;
        case "q":
            var tom17 = new Audio('lettersound/Q.mp3');
            tom17.play(); 
        break; 
        case "r":
            var tom18 = new Audio('lettersound/R.mp3');
            tom18.play(); 
        break; 
        case "s":
            var tom19 = new Audio('lettersound/S.mp3');
            tom19.play(); 
        break;
        case "t":
            var tom20 = new Audio('lettersound/T.mp3');
            tom20.play(); 
        break;
        case "u":
            var tom21 = new Audio('lettersound/U.mp3');
            tom21.play(); 
        break;
        case "v":
            var tom22 = new Audio('lettersound/V.mp3');
            tom22.play(); 
        break;
        case "w":
            var tom23 = new Audio('lettersound/W.mp3');
            tom23.play(); 
        break; 
        case "x":
            var tom24 = new Audio('lettersound/X.mp3');
            tom24.play(); 
        break; 
        case "y":
            var tom25 = new Audio('lettersound/Y.mp3');
            tom25.play(); 
        break; 
        case "z":
            var tom26 = new Audio('lettersound/Z.mp3');
            tom26.play(); 
        break;                  
    }
}


var numberOfButton1 = document.querySelectorAll(".numb").length;
for(var i=0; i< numberOfButton1; i++){
    document.querySelectorAll(".numb")[i].addEventListener("click", function(){

        var buttonInnerHtml1 = this.innerHTML;
        makeSound1(buttonInnerHtml1);
        buttonAnimation(buttonInnerHtml1);
    });
}
document.addEventListener("keydown", function(event){
    makeSound1(event.key);
    
 }) ;

function makeSound1(key1){
   switch(key1){
    case "0":
        var num1 = new Audio('numbersound/0.mp3');
        num1.play(); 
    break;
    case "1":
        var num2 = new Audio('numbersound/1.mp3');
        num2.play(); 
    break;
    case "2":
        var num3 = new Audio('numbersound/2.mp3');
        num3.play(); 
    break;
    case "3":
        var num4 = new Audio('numbersound/3.mp3');
        num4.play(); 
    break;
    case "4":
        var num5 = new Audio('numbersound/4.mp3');
        num5.play(); 
    break;
    case "5":
        var num6 = new Audio('numbersound/5.mp3');
        num6.play(); 
    break;
    case "6":
        var num7 = new Audio('numbersound/6.mp3');
        num7.play(); 
    break;
    case "7":
        var num8 = new Audio('numbersound/7.mp3');
        num8.play(); 
    break;
    case "8":
        var num9 = new Audio('numbersound/8.mp3');
        num9.play(); 
    break;
    case "9":
        var num10 = new Audio('numbersound/9.mp3');
        num10.play(); 
    break;
     
   }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");

 setTimeout(function(){
    activeButton.classList.remove("pressed");
 }, 150);
}

