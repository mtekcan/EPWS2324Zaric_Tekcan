let currentTaskIndex = parseInt(localStorage.getItem('currentTaskIndex')) || 0; // Wert als Zahl behandeln oder Standardwert 0

function loadTask() {
  const task = tasks[currentTaskIndex];
  questionText.textContent = task.question;

  imagesContainer.innerHTML = ""; // Vorherige Bilder löschen
  task.images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.url;  // URL des Bildes
    img.alt = image.name;
    img.onclick = () => checkAnswer(image.name); // Antwort überprüfen
    imagesContainer.appendChild(img);
  });
}

function checkAnswer(selectedImage) {
  const task = tasks[currentTaskIndex];
  if (selectedImage === task.correct) {
    alert("Richtig!");
  } else {
    alert("Falsch! Lies dir die Aufgabenstellung nochmal durch.");
  }

  // Nächste Aufgabe: Index erhöhen, zyklisch durch die Aufgaben
  currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
  localStorage.setItem('currentTaskIndex', currentTaskIndex); // Fortschritt speichern
  loadTask();
}

// Aufgabe laden
loadTask();
