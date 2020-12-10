document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

function player1() {
    document.getElementById("player1").style.color = "#001897";
    document.getElementById("player1").style.fontWeight = "bold";
    document.getElementById("player1").style.fontSize = "2.3rem";
    document.getElementById("player1").style.textDecorationLine = "underline";

    document.getElementById("player2").style.color = "initial";
    document.getElementById("player2").style.fontWeight = "initial";
    document.getElementById("player2").style.fontSize = "initial";
    document.getElementById("player2").style.textDecorationLine = "initial";
    tour = "O";
}

function player2() {
    document.getElementById("player2").style.color = "#001897";
    document.getElementById("player2").style.fontWeight = "bold";
    document.getElementById("player2").style.fontSize = "2.3rem";
    document.getElementById("player2").style.textDecorationLine = "underline";

    document.getElementById("player1").style.color = "initial";
    document.getElementById("player1").style.fontWeight = "initial";
    document.getElementById("player1").style.fontSize = "initial";
    document.getElementById("player1").style.textDecorationLine = "initial";
    tour = "X";

    if (botB === 1){
        player1();
    }
}

function bot(){
    let i = Math.trunc(Math.random()*9)

    for (let y of interdit) {
        if (i === y) {
            i = -1;
            flag = 1;
            bot();
        }
        else {
            flag = 0;
        }
    }
    if (flag !== 1){
        divCase[i].style.backgroundImage = "url('croix.png')";
        croix.push(i);
        interdit.push(i);
        flag = 0;
        player1();
    }

    if (interdit.length > 8){
        draw()
    }

    if (croix.includes(0)){
        if (croix.includes(1)){
            if (croix.includes(2)){
                winner = " Bot ";
                win();
            }
        }
        else if (croix.includes(3)){
            if (croix.includes(6)){
                winner = " Bot ";
                win();
            }
        }
        else if (croix.includes(4)){
            if (croix.includes(8)){
                winner = " Bot ";
                win();
            }
        }
    }
    if (croix.includes(3)){
        if (croix.includes(4)){
            if (croix.includes(5)){
                winner = " Bot ";
                win();
            }
        }
    }
    if (croix.includes(6)){
        if (croix.includes(7)){
            if (croix.includes(8)){
                winner = " Bot ";
                win();
            }
        }
    }
    if (croix.includes(1)){
        if (croix.includes(4)){
            if (croix.includes(7)){
                winner = " Bot ";
                win();
            }
        }
    }
    if (croix.includes(2)){
        if (croix.includes(5)){
            if (croix.includes(8)){
                winner = " Bot ";
                win();
            }
        }
        else if (croix.includes(4)){
            if (croix.includes(6)){
                winner = " Bot ";
                win();
            }
        }
    }
}

function win(){
    for (let reset = 0; reset<9; reset++){
        divCase[reset].style.backgroundImage = "none";
    }
    croix = [];
    rond = [];
    interdit = [];
    flag = 0;
    player1();
    alert("Le joueur "+winner+" a gagné");
}

function draw(){
    for (let reset = 0; reset<9; reset++){
        divCase[reset].style.backgroundImage = "none";
    }
    croix = [];
    rond = [];
    interdit = [];
    flag = 0;
    player1();
    alert("Personne n'a gagné");
}

let croix = [];
let rond = [];
let interdit = [];
let flag = 0;
let winner = "";
let tour = "O";
let botB = 0;

document.getElementById("bot").addEventListener("click", () =>{
    botB = 1;
});

let divCase = document.getElementsByClassName("case");
for (let i = 0; i<9; i++) {
    divCase[i].style.backgroundImage = "none";
    divCase[i].addEventListener("mouseup", function (event) {
        switch (event.button) {
            case 0:
                flag = 0;
                if (interdit.length > 8){
                    draw()
                }
                if (botB === 1){
                    setTimeout(bot, 200)
                }
                for (let y of interdit) {
                    if (i === y) {
                        flag = 1;
                    }
                }
                if (flag !== 1 && tour === "O"){
                    divCase[i].style.backgroundImage = "url('rond.png')";
                    rond.push(i);
                    interdit.push(i);
                    setTimeout(player2, 200);
                    flag = 0;
                }
                if (rond.includes(0)){
                    if (rond.includes(1)){
                        if (rond.includes(2)){
                            winner = " O ";
                            win();
                        }
                    }
                    else if (rond.includes(3)){
                        if (rond.includes(6)){
                            winner = " O ";
                            win();
                        }
                    }
                    else if (rond.includes(4)){
                        if (rond.includes(8)){
                            winner = " O ";
                            win();
                        }
                    }
                }
                if (rond.includes(3)){
                    if (rond.includes(4)){
                        if (rond.includes(5)){
                            winner = " O ";
                            win();
                        }
                    }
                }
                if (rond.includes(6)){
                    if (rond.includes(7)){
                        if (rond.includes(8)){
                            winner = " O ";
                            win();
                        }
                    }
                }
                if (rond.includes(1)){
                    if (rond.includes(4)){
                        if (rond.includes(7)){
                            winner = " O ";
                            win();
                        }
                    }
                }
                if (rond.includes(2)){
                    if (rond.includes(5)){
                        if (rond.includes(8)){
                            winner = " O ";
                            win();
                        }
                    }
                    else if (rond.includes(4)){
                        if (rond.includes(6)){
                            winner = " O ";
                            win();
                        }
                    }
                }
                break;
            case 2:
                flag = 0;
                if (interdit.length > 8){
                    draw()
                }
                for (let y of interdit) {
                    if (i === y) {
                        flag = 1;
                    }
                }
                if (flag !== 1 && tour === "X") {
                    divCase[i].style.backgroundImage = "url('croix.png')";
                    croix.push(i);
                    interdit.push(i);
                    setTimeout(player1, 200);
                    flag = 0;
                }
                if (croix.includes(0)){
                    if (croix.includes(1)){
                        if (croix.includes(2)){
                            winner = " X ";
                            win();
                        }
                    }
                    else if (croix.includes(3)){
                        if (croix.includes(6)){
                            winner = " X ";
                            win();
                        }
                    }
                    else if (croix.includes(4)){
                        if (croix.includes(8)){
                            winner = " X ";
                            win();
                        }
                    }
                }
                if (croix.includes(3)){
                    if (croix.includes(4)){
                        if (croix.includes(5)){
                            winner = " X ";
                            win();
                        }
                    }
                }
                if (croix.includes(6)){
                    if (croix.includes(7)){
                        if (croix.includes(8)){
                            winner = " X ";
                            win();
                        }
                    }
                }
                if (croix.includes(1)){
                    if (croix.includes(4)){
                        if (croix.includes(7)){
                            winner = " X ";
                            win();
                        }
                    }
                }
                if (croix.includes(2)){
                    if (croix.includes(5)){
                        if (croix.includes(8)){
                            winner = " X ";
                            win();
                        }
                    }
                    else if (croix.includes(4)){
                        if (croix.includes(6)){
                            winner = " X ";
                            win();
                        }
                    }
                }

        }
    });
}

player1();