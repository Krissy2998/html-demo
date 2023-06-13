function yourName() {
 let user = prompt("what is your name?");
 return document.write(user)
}

function timeOfDay(){
    let time = prompt ("what hour is it?(0-23");
    let location = prompt ("What country are you in?")
    let message= "";

    if (time <=11 && location ==="England") {
message= "Good Morning, it's time for ice cream";
} else if (time <= 18 && location ==="England"){
message= "Good Afternoon, it's ice cream time";
} else if (time <24 && location === "England"){
    message= "Good night, sweet treats before sweet dream!"
}

return doxument.write (message)
}
let myChoices= ["cone", "cup", "sundae"]

//initalization / condition / increment

for(let i = 0; i < myChoices.lenght; i++){
    console.log("Which one would you fancy today?!" + myChoices [i])
}