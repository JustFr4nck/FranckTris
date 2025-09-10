import { resetWindow, putImg, checkIsVoid, nikWin, colorTurn, checkAlgo } from "./assets/scriptFunction/logicScript.js";

let arr = [];

const p1Img = `<img class="pImgStyle" src="../public/images/cat.png"></img>`;
const p2Img = `<img class="pImgStyle" src="../public/images/dog.png"></img>`;

const goToNik = document.getElementById("goToNik");
const colorP1 = document.getElementById("colorP1");
const colorP2 = document.getElementById("colorP2");

// ricezione dei vari elementi in un array
for (let i = 0; i < 9; i++) {
  arr[i] = document.getElementById("cel" + (i + 1));
}

// controllo del click su ogni cella
arr.forEach((cel) => {
  cel.addEventListener("click", () => putOnClick(cel));
});

//colore di inizio per player 1
colorP1.classList.add("playerInGame");

//Aggiunge l'icona del player 
function putOnClick(cel) {

  //controlla se la cella è gia occupata
  if(!checkIsVoid(cel)) {
    alert("ERROR: You can't put a symbol where there is already one");
    return;
  }

  if (putImg() === "tP1") {
    cel.innerHTML = p1Img;
    cel.setAttribute("who-played", "p1");
  } else {
    cel.innerHTML = p2Img;
    cel.setAttribute("who-played", "p1");
  }

  //cambia il colore a seconda del turno del giocatore
  colorTurn(colorP1, colorP2);

  //Controlla chi ha vinto
  const result = checkAlgo();
}

//al click del bottone reset si resetta la pagina
document.getElementById("refreshBtn").addEventListener("click", resetWindow);

//al click del bottone per cambiare nickname cambia pagina 
goToNik.addEventListener("click", () => {

  nikWin();

});