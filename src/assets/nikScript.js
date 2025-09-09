document.addEventListener("DOMContentLoaded", () => {
  const nik1 = document.getElementById("nik1");
  const nik2 = document.getElementById("nik2");
  const confBtn = document.getElementById("confBtn");

  // Se gli elementi non esistono, non fare nulla
  if (!confBtn || !nik1 || !nik2) return;

  confBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Controlli sui nickname
    if (nik1.value === nik2.value && nik1.value !== "" && nik2.value !== "") {
      alert("ERROR: nicknames must be different!!!");
      return;
    } else if (nik1.value === "" || nik2.value === "") {
      alert("ERROR: set all the nicknames!!!");
      return;
    }

    // Apri il gioco in una nuova scheda
    const newWin = window.open("../../index.html");


    newWin.onload = () => {
      const { nik1, nik2 } = getNiknames(); 
      newWin.document.getElementById("player1").innerHTML = nik1;
      newWin.document.getElementById("player2").innerHTML = nik2;
    };
  });
});

export function getNiknames() {
  const nik1Input = document.getElementById("nik1");
  const nik2Input = document.getElementById("nik2");

  return {
    nik1: nik1Input ? nik1Input.value : "",
    nik2: nik2Input ? nik2Input.value : ""
  };
}