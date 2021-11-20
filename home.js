var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomDiceImage1 = "dice"+randomNumber1+".png"; // dice.png
var randomSourceImage1 = "assets/"+randomDiceImage1; // assets/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSourceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceImage2 = "dice"+randomNumber2+".png";// dice.png
var randomSourceImage2 = "assets/"+randomDiceImage2;// assets/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSourceImage2);

// console.log(randomNumber1)
// console.log(randomDiceImage1)
// console.log(randomSourceImage1)
// console.log(image1)

// console.log(randomNumber2)
// console.log(randomDiceImage2)
// console.log(randomSourceImage2)
// console.log(image2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 😎Player 1 wins! " //Agr pehla dice dusre se chota  hoga to ye print hoga
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = " 😁Player 2 wins! " // Agr dusra pehle se bada hua to ye print hoga 

}

else{
    document.querySelector("h1").innerHTML = "🤷‍♀️ Draw " // if two number r same then this will print

}