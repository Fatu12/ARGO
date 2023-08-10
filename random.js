function d6() {
        var roll = Math.random();
        roll = Math.floor(Math.random()*6 +1);
        //var floor = Math.floor(1.8);


    return roll;
}

    
var playerRoll = d6();

// console.log(playerRoll);
console.log("The player rolled: " + playerRoll);



// second 
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


function array (){
    var roll = Math.random();
    roll =(Math.random()*lifesAnswers.length + 1);
    return roll;

}
var player = array();
console.log(lifesAnswers);



