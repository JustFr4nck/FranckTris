document.addEventListener("DOMContentLoaded", () => {
  const nik1 = document.getElementById("nik1");
  const nik2 = document.getElementById("nik2");
  const confBtn = document.getElementById("confBtn");

  // in caso gli elementi non siano dichiarati
  if (!confBtn || !nik1 || !nik2) return;

  confBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // controlli che le caselle vengano utilizzate correttamante
    if (nik1.value === nik2.value && nik1.value !== "" && nik2.value !== "") {
      alert("ERROR: nicknames must be different!!!");
      return;
    } else if (nik1.value === "" || nik2.value === "") {
      alert("ERROR: set all the nicknames!!!");
      return;
    }

    //apre di nuovo la finestra index
    const nikWin = window.open("../../../index.html");

    //sul caricamento della pagina esegue l'arrow function seguente
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
