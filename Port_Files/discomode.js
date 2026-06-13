const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", 'b', 'a'
];

let index = 0;

let discoActive = false;
const music = new Audio("Caramella Girls - Caramelldansen HD Version (Swedish Original) Official.mp3");

document.addEventListener("keydown", (event) => {
    if (!discoActive){
        if (event.key == konamiCode[index]){
            index++;
        }
        else{
            index = 0;
        }

        if (index == konamiCode.length){
            disco();
            index = 0;
        }
    }

    else if (event.code == "Space"){
        stopdisco();
    }
})

function disco(){
    console.log("disco");

    discoActive = true;
    const overlay = document.getElementById("discooverlay");
    const message = document.getElementById("stopmessage");
    overlay.classList.add("active");
    message.classList.add("visible");
    music.play();

    setTimeout(() => {
        if (discoActive){
            message.classList.remove("visible");
        }
    }, 1500);
}

function stopdisco(){
    discoActive = false;
    const overlay = document.getElementById("discooverlay");
    const message = document.getElementById("stopmessage");
    overlay.classList.remove("active");
    message.classList.remove("visible");
    music.pause();
    music.currentTime = 0;
}