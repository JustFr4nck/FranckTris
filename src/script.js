import { getNiknames } from "./assets/nikScript.js";

let arr = [];

let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let p1 = true;
let p2 = false;
let inc = 0;
let flagWin = false;

const p1Img = `<img class="pImgStyle" src="../public/images/cat.png"></img>`;
const p2Img = `<img class="pImgStyle" src="../public/images/dog.png"></img>`;

const winner = document.getElementById("winner");
const p1Id = document.getElementById("p1Id");
const p2Id = document.getElementById("p2Id");

// inizia sempre il giocatore 1
p1Id.classList.add("playerInGame");

// ricezione dei vari elementi in un array
for (let i = 0; i < 9; i++) {
  arr[i] = document.getElementById("cel" + (i + 1));
}

// controllo del click su ogni cella
arr.forEach((cel) => {
  cel.addEventListener("click", () => putOnClick(cel));
});

// Inserimento simboli di gioco
function putOnClick(cel) {
  if (!check(cel)) return;

  if (p1) {
    cel.innerHTML = p1Img;
    cel.setAttribute("who-played", "p1");
    p1 = false;
    p2 = true;
  } else {
    cel.innerHTML = p2Img;
    cel.setAttribute("who-played", "p2");
    p1 = true;
    p2 = false;
  }

  colorPlayer();
  inc++;

  if (!checkWinner() && inc === 9) {
    youWin("tie");
  }
}

// Controlla che la cella sia vuota
function check(cel) {
  if (cel.innerHTML !== "") {
    alert(
      "ERRORE: non puoi inserire il simbolo dove ne è già presente un altro"
    );
    return false;
  }
  return true;
}

// Controllo algoritmi di vittoria
 function checkWinner() {
  if (
    arr[0].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[1].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[2].getAttribute("who-played")
  ) {
    arr[0].classList.add("backgroundWin");
    arr[1].classList.add("backgroundWin");
    arr[2].classList.add("backgroundWin");
    youWin(arr[0]);
    return true;
  } else if (
    arr[0].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[3].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[6].getAttribute("who-played")
  ) {
    arr[0].classList.add("backgroundWin");
    arr[3].classList.add("backgroundWin");
    arr[6].classList.add("backgroundWin");
    youWin(arr[0]);
    return true;
  } else if (
    arr[0].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[4].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[8].getAttribute("who-played")
  ) {
    arr[0].classList.add("backgroundWin");
    arr[4].classList.add("backgroundWin");
    arr[8].classList.add("backgroundWin");
    youWin(arr[0]);
    return true;
  } else if (
    arr[1].getAttribute("who-played") &&
    arr[1].getAttribute("who-played") === arr[4].getAttribute("who-played") &&
    arr[1].getAttribute("who-played") === arr[7].getAttribute("who-played")
  ) {
    arr[1].classList.add("backgroundWin");
    arr[4].classList.add("backgroundWin");
    arr[7].classList.add("backgroundWin");
    youWin(arr[1]);
    return true;
  } else if (
    arr[2].getAttribute("who-played") &&
    arr[2].getAttribute("who-played") === arr[5].getAttribute("who-played") &&
    arr[2].getAttribute("who-played") === arr[8].getAttribute("who-played")
  ) {
    arr[2].classList.add("backgroundWin");
    arr[5].classList.add("backgroundWin");
    arr[8].classList.add("backgroundWin");
    youWin(arr[2]);
    return true;
  } else if (
    arr[2].getAttribute("who-played") &&
    arr[2].getAttribute("who-played") === arr[4].getAttribute("who-played") &&
    arr[2].getAttribute("who-played") === arr[6].getAttribute("who-played")
  ) {
    arr[2].classList.add("backgroundWin");
    arr[4].classList.add("backgroundWin");
    arr[6].classList.add("backgroundWin");
    youWin(arr[2]);
    return true;
  } else if (
    arr[3].getAttribute("who-played") &&
    arr[3].getAttribute("who-played") === arr[4].getAttribute("who-played") &&
    arr[3].getAttribute("who-played") === arr[5].getAttribute("who-played")
  ) {
    arr[3].classList.add("backgroundWin");
    arr[4].classList.add("backgroundWin");
    arr[5].classList.add("backgroundWin");
    youWin(arr[3]);
    return true;
  } else if (
    arr[6].getAttribute("who-played") &&
    arr[6].getAttribute("who-played") === arr[7].getAttribute("who-played") &&
    arr[6].getAttribute("who-played") === arr[8].getAttribute("who-played")
  ) {
    arr[6].classList.add("backgroundWin");
    arr[7].classList.add("backgroundWin");
    arr[8].classList.add("backgroundWin");
    youWin(arr[6]);
    return true;
  }

  return false;
} 

// Controlla chi ha vinto e lo mostra a schermo
function youWin(cel) {
  if (typeof cel === "string" && cel === "tie") {
    winner.innerHTML = "TIE!!!";
  } else if (cel.getAttribute("who-played") === "p2") {
    winner.innerHTML = "PLAYER 2 WON!!!";
  } else if (cel.getAttribute("who-played") === "p1") {
    winner.innerHTML = "PLAYER 1 WON!!!";
  }
  flagWin = true;
}

// Ricomincia dall'inizio
document.getElementById("refreshBut").addEventListener("click", () => {
  window.location.reload();
  flagWin = false;
});

// Cambia il colore a seconda del player che deve giocare
function colorPlayer() {
  p1Id.classList.remove("playerInGame");
  p2Id.classList.remove("playerInGame");

  if (p1) {
    p1Id.classList.add("playerInGame");
  } else {
    p2Id.classList.add("playerInGame");
  }
}

// Bottone per aprire pagina nickname
const goToNik = document.getElementById("goToNik");

goToNik.addEventListener("click", () => {
  const newWin = window.open("./src/pages/niknames.html", "_blank");
  
});
  
