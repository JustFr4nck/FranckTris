
export let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let inc = 0;

export function checkIsVoid(cel){

    if(cel.innerHTML !== ""){
        return false;
    }
    return true;
}

export function putImg() {
  if (inc % 2 === 0) {
    inc++;
    return "tP1";
  } else {
    inc++;
    return "tP2";
  }
}

export function colorTurn(colorP1, colorP2){

    colorP1.classList.remove("playerInGame");
    colorP2.classList.remove("playerInGame");

    if(inc%2 === 0){
        colorP1.classList.add("playerInGame");
    }
    else{
        colorP2.classList.add("playerInGame");
    }
}


export function checkAlgo(){

    const winAlgo = []
}


export function resetWindow() {
  window.location.reload();
}


export function nikWin(){

    window.open("./src/pages/niknames.html");
}