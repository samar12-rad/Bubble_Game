function makeBubble(){
    var clutter = '';
for(var i = 1; i <= 70; i++){
    
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}


document.querySelector("#pbottom").innerHTML = clutter;
}

var score = 0;
var timer = 30;
var rn = 0;

function changeScore(){
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

function runTimer(){
    
    var timeset = setInterval(function () {
        if (timer > 0 ){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timeset);
            document.querySelector("#pbottom").innerHTML = `<div id="game"><h1>Game Over</h1><h2>You scored ${score} points.</h2></div>`;
            document.querySelector("#pbottom").style = `background-color: #FF0000;
            background-image: linear-gradient(180deg, #FF0000 22%, #ffc262 74%);
            `
        }    
    }, 1000);
}

function makeNewHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = rn;
}

document.querySelector("#pbottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if ( clickedNum ==+ rn){
        changeScore();
        makeNewHit();
        makeBubble();
    }
});

makeNewHit();
makeBubble();
runTimer();
