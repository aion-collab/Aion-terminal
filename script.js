document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");
  const runButton = document.getElementById("run");

  runButton.addEventListener("click", function () {
    output.innerText = "AION Terminal aktiviert.\nBereit für Eingaben.";
  });
});
