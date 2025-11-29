const prompt=require("prompt-sync")()
const name=prompt("What is your name? ")
console.log("Hello",name,"welcome to our game!")

const shouldWePlay=prompt('Do you want to play?')

if(shouldWePlay.toLowerCase()==="yes"){
    //Game Logic
    const leftOrRight=prompt("You enter a maze, left or right?")
    if(leftOrRight==="left"){
        console.log("You go left and see a bridge...")
        const cross=prompt("Do you wanna cross the bridge?")
        if(cross==="yes"||cross==='y'){
            console.log("You cross,but bridge broke you LOST!")
        }
        else{
            console.log("YOU WiN!!!"+name)
        }
    }
    else{
        console.log("You are always right")
    }
}
else if(shouldWePlay.toLowerCase()==="no"){
    console.log("Okay :(")
}
else{
    console.log("Invalid input...")
}