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
    const nikWin = window.open("../../index.html");

    nikWin.onload = () => {
      const { nik1, nik2 } = getNiknames();
      nikWin.document.getElementById("player1").innerHTML = nik1;
      nikWin.document.getElementById("player2").innerHTML = nik2;
    };
  });
});

export function getNiknames() {
  const nik1Text = document.getElementById("nik1");
  const nik2Text = document.getElementById("nik2");

  return { nik1: nik1Text.value, nik2: nik2Text.value };
}
