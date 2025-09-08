let arr = [];

let p1 = true;
let p2 = false;
let inc = 0;

const p1Img = `<img class="pImgStyle" src="../public/images/cat.png"></img>`;
const p2Img = `<img class="pImgStyle" src="../public/images/dog.png"></img>`;

//ricezione dei v ari elementi in un array
for (let i = 0; i < 9; i++) {
  arr[i] = document.getElementById("cel" + (i + 1));
}

//Inserimento simboli di gioco
function putOnClick(cel) {
  if (!check(cel)) {
    return;
  }

  if (p1 === true) {
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

  inc++;

  if (!checkWinner() && inc === 9) {
    console.log(false);
    youWin("tie");
  }
}

//controlla che dove il giocatore clicca non ci sia già un' icona
function check(cel) {
  if (cel.innerHTML !== "x") {
    alert(
      "ERRORE: non puoi inserire il simbolo dove ne è già presente un altro"
    );
    return false;
  }
  return true;
}

//controllo algoritmi di vittoria
function checkWinner() {
  if (
    arr[0].getAttribute("who-played") === arr[1].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[2].getAttribute("who-played")
  ) {
    youWin(arr[0]);
    return true;
  } else if (
    arr[0].getAttribute("who-played") === arr[3].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[6].getAttribute("who-played")
  ) {
    youWin(arr[0]);
    return true;
  } else if (
    arr[0].getAttribute("who-played") === arr[4].getAttribute("who-played") &&
    arr[0].getAttribute("who-played") === arr[8].getAttribute("who-played")
  ) {
    youWin(arr[0]);
    return true;
  } else if (
    arr[1].getAttribute("who-played") === arr[5].getAttribute("who-played") &&
    arr[1].getAttribute("who-played") === arr[7].getAttribute("who-played")
  ) {
    youWin(arr[1]);
    return true;
  } else if (
    arr[2].getAttribute("who-played") === arr[5].getAttribute("who-played") &&
    arr[2].getAttribute("who-played") === arr[8].getAttribute("who-played")
  ) {
    youWin(arr[2]);
    return true;
  } else if (
    arr[2].getAttribute("who-played") === arr[4].getAttribute("who-played") &&
    arr[2].getAttribute("who-played") === arr[6].getAttribute("who-played")
  ) {
    youWin(arr[2]);
    return true;
  } else if (
    arr[3].getAttribute("who-played") === arr[4].getAttribute("who-played") &&
    arr[3].getAttribute("who-played") === arr[5].getAttribute("who-played")
  ) {
    youWin(arr[3]);
    return true;
  } else if (
    arr[6].getAttribute("who-played") === arr[7].getAttribute("who-played") &&
    arr[6].getAttribute("who-played") === arr[8].getAttribute("who-played")
  ) {
    youWin(arr[0]);
    return true;
  }

  return false;
}

//Controlla chi ha vinto e lo mostra a schermo
function youWin(col) {
  const winner = document.getElementById("winner");

  if (col.innerHTML === "tie") {
    winner.innerHTML = "TIE!!!";
  } else if (col.getAttribute("who-played") === "p2") {
    winner.innerHTML = "PLAYER 2 WON!!!";
  } else if (col.getAttribute("who-played") === "p1") {
    winner.innerHTML = "PLAYER 1 WON!!!";
  }
}

//ricomincia dall'inizio
document.getElementById("refreshBut").addEventListener("click", () => {
  window.location.reload();
});

//controllo del click su ogni cella
arr.forEach((cel) => {
  cel.addEventListener("click", () => putOnClick(cel));
});
