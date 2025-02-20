document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js wurde geladen!");

  // Stelle sicher, dass `tasks` existiert
  if (typeof tasks === "undefined") {
      console.error("Fehler: `tasks` ist nicht definiert!");
      return;
  }

  const imagesContainer = document.getElementById("images");
  const questionText = document.getElementById("question-text");

  let currentTaskIndex = parseInt(localStorage.getItem("currentTaskIndex")) || 0;

  function loadTask() {
      console.log("Lade Aufgabe:", currentTaskIndex);

      if (currentTaskIndex >= tasks.length) {
          console.warn("Kein gültiger Task-Index, setze auf 0 zurück.");
          currentTaskIndex = 0;
      }

      const task = tasks[currentTaskIndex];

      if (!task) {
          console.error("Fehler: Task existiert nicht!");
          return;
      }

      questionText.textContent = task.question;
      imagesContainer.innerHTML = ""; // Vorherige Bilder löschen

      task.images.forEach((image) => {
          const img = document.createElement("img");
          img.src = image.url;
          img.alt = image.name;
          img.onclick = () => checkAnswer(image.name);

          img.onerror = function () {
              console.error("Fehler: Bild konnte nicht geladen werden:", image.url);
          };

          imagesContainer.appendChild(img);
          console.log("Bild hinzugefügt:", image.url);
      });
  }

  function checkAnswer(selectedImage) {
      console.log("Antwort ausgewählt:", selectedImage);

      const task = tasks[currentTaskIndex];

      if (selectedImage === task.correct) {
          alert("Richtig!");
      } else {
          alert("Falsch! Versuche es erneut.");
      }

      // Fortschritt speichern
      currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
      localStorage.setItem("currentTaskIndex", currentTaskIndex);
      loadTask();
  }

  // Erste Aufgabe laden
  loadTask();
});
