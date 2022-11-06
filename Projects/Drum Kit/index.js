var totalDrumBtns = document.querySelectorAll(".drum").length;

for(var i = 0; i< totalDrumBtns; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var temp = this.innerText;
        sounds(temp);
        animationBtn(temp);
    });
}


document.addEventListener("keydown", function(event){
    sounds(event.key);
    animationBtn(event.key);
})


function sounds(targetKey){

    switch (targetKey) {
        case "a":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "f":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
    
        default:
            break;
    }
}

function animationBtn(pressedKey){
    var activeBtn = document.querySelector("." + pressedKey);
    activeBtn.classList.add("pressed");
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 100);
}