## Proof-of-Concept für eine barrierefreie Lernplattform für Kinder mit Down-Syndrom
-
Ziel:
Erstellung einer prototypischen Lernplattform, die Kindern mit Down-Syndrom ermöglicht, interaktive Lerninhalte barrierefrei zu nutzen. Die Plattform soll QR-Code-gestützt sein, alters- und fähigkeitsgerechte Übungen bieten und einfache Interaktionen wie Tippen, Wischen und Drag & Drop unterstützen.
-
Fokusbereich für das PoC:
QR-Code-Authentifizierung und Laden personalisierter Inhalte.
Anzeige einer Übung mit visuellen und auditiven Feedbackmechanismen.
Speicherung des Lernfortschritts nach Abschluss einer Aufgabe.
Umsetzungsschritte:
QR-Code-Authentifizierung:
Implementierung eines QR-Code-Scanners, der Nutzer authentifiziert und deren personalisierte Inhalte lädt.
Anzeigen der Startseite mit individuellen Übungen.
Interaktive Übung:
Bereitstellung einer Übung (z. B. Wort-Bild-Zuordnung) mit Drag & Drop-Optionen.
Echtzeit-Feedback: Animationen für richtige Antworten und Hinweise für falsche Antworten.
Fortschrittsspeicherung:
Automatische Speicherung des Fortschritts nach Beendigung der Übung.
Visualisierung der Fortschritte durch Fortschrittsbalken oder Medaillen.
Exit-Kriterien (Erfolgskriterien):
QR-Code wird erfolgreich gescannt, und die personalisierte Startseite wird angezeigt.
Eine Übung kann durch Drag & Drop vollständig abgeschlossen werden, wobei Feedback gegeben wird.
Der Lernfortschritt wird korrekt gespeichert und ist abrufbar.
Fail-Kriterien (Misserfolgskriterien):
QR-Code-Authentifizierung schlägt fehl, oder falsche Inhalte werden geladen.
Die interaktive Übung funktioniert nicht korrekt (z. B. Drag & Drop-Mechanik).
Fortschritt wird nicht gespeichert oder falsch visualisiert.
Fallback-Lösungen:
QR-Code-Authentifizierung: Manuelle Anmeldung durch eine PIN als Alternative.
Interaktive Übung: Nutzung statischer Übungen ohne Drag & Drop, falls diese nicht zuverlässig funktionieren.
Speicherung des Fortschritts: Temporäre Speicherung lokal auf dem Gerät, falls die Cloud-Speicherung scheitert.
2. Durchführung
Umsetzung des PoC in einem Testumfeld:
QR-Code-Authentifizierung testen:
QR-Code wird vom Schülerausweis gescannt.
Plattform lädt personalisierte Inhalte und zeigt die korrekte Startseite an.
Ergebnis: [Dokumentieren, ob erfolgreich.]
Interaktive Übung bereitstellen:
Nutzer zieht Wörter zu den passenden Bildern.
Nach jedem Zug wird Feedback gegeben (z. B. Animation bei Richtigkeit).
Ergebnis: [Dokumentieren, ob die Übung wie gewünscht funktioniert.]
Fortschritt speichern:
Nutzer beendet die Übung.
Plattform speichert Fortschritte automatisch und zeigt diese in der Fortschrittsübersicht an.
