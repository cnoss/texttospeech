# Aufgaben zum Workshop "Sprache im Web"

Dieses Repository wird Teil des Vortrags "Sprache im Web" und stellt den Rahmen für die Aufgaben. Daher ist es essentiell diese README durchzulesen und die unten stehenden Schritte zu befolgen.

## Vorausgesetzte Kenntnisse
* HTML 5
* CSS (Grundkenntnisse)
* Javascript (jQuery, Node.js)
* Git

## Benötigte Software
* Passende IDE (WebStorm, PHPStorm, VS Code o.ä.)
* Einer der folgenden Browser: Chrome, Firefox, Edge, Safari, Opera
* Node.js: Version 12 oder höher

## Installation
* Repository klonen: `git clone`
* In den Ordner wechseln: `cd texttospeech`
* Module installieren: `npm install`

## Run
* App starten: `npm start`
* Browser öffnen: `localhost:3000/`, es sollte der Text "Hello World!" zu sehen sein
* Nach Änderungen am Frontendcode: Fenster aktualisieren

## Aufbau
### Backend (app.js)
* Node.js Backend für simples Routing
* Unter `const PORT` lässt sich der Port für Localhost ändern
* Lädt unter `/aufgabe_1`, `/aufgabe_2` etc. die entsprechenden Seiten aus `/views`

### Frontend (/views)
* Jede Seite besitzt entsprechende CSS- und JS-Files unter `/assets`
* Im Head sind sowohl diese als auch jQuery und Bootstrap referenziert
* Das Design-Framework der Aufgabenseiten ist Bootstrap, Kenntnisse sind nicht erforderlich
* Auf Wunsch kann hier ein eigenes Framework genutzt werden

## Materialien
Im Workshop werden verschiedene Arbeitsmaterialien genannt, die hier referenziert werden. Vorheriges Sichten ist nicht nötig.

* [Umfrage "Wozu TTS?"](https://pingo.coactum.de/752008)
* [Mozilla web docs - Web Speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [Bootstrap Elemente](https://getbootstrap.com/docs/4.4/components/alerts/)
* [jQuery](https://api.jquery.com/)

## Weitere Quellen des Workshop
Hier werden die Quellen zum Workshop aufgelistet. Vorheriges Sichten ist nicht nötig.

* [CSS Speech](https://www.w3.org/TR/css-speech-1/)
* [SSML](https://cloud.google.com/text-to-speech/docs/ssml?hl=de)
* [Pronunciation](https://www.github.com/w3c/pronunciation)
