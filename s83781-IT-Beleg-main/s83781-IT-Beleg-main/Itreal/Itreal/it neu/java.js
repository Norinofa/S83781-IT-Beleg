// Array von Mathematikfragen
var mathque = [
  { question: "x^2+x^2=", Options: ["2x^2", "x^4", "x^8", "2x^4"], cur: 0 },
  { question: "x^2*x^2=", Options: ["x^4", "x^2", "2x^2", "4x"], cur: 0 },
  {
    question: "7 + 8=",
    Options: ["12", "14", "15", "16", "18"],
    cur: 2,
  },

  {
    question: "6^2=",
    Options: ["30", "32", "36", "40", "42"],
    cur: 2,
  },
  {
    question: "Ableitung: f(x) = 3x^2?",
    Options: ["6", "6x", "3x", "6x^2", "9x"],
    cur: 1,
  },
  {
    question: "√64=",
    Options: ["6", "7", "8", "9", "10"],
    cur: 2,
  },
];

// Array von Allgemeinwissensfragen
var allgemeinque = [
  {
    question: "Welches Land hat die größte Bevölkerung?",
    Options: ["USA", "Indien", "China", "Russland", "Brasilien"],
    cur: 2,
  },
  {
    question: "Welcher Planet ist der dritte von der Sonne?",
    Options: ["Mars", "Venus", "Erde", "Jupiter", "Saturn"],
    cur: 2,
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    Options: ["5", "6", "7", "8", "9"],
    cur: 2,
  },
  {
    question: "Welches Element hat das chemische Symbol O?",
    Options: ["Gold", "Silber", "Sauerstoff", "Wasserstoff", "Kohlenstoff"],
    cur: 2,
  },
  {
    question: "Welches Jahr markierte das Ende des Zweiten Weltkriegs?",
    Options: ["1942", "1943", "1944", "1945", "1946"],
    cur: 3,
  },
  {
    question: "Wer schrieb 'Die Verwandlung'?",
    Options: [
      "Franz Kafka",
      "Friedrich Schiller",
      "Johann Wolfgang von Goethe",
      "Thomas Mann",
      "Hermann Hesse",
    ],
    cur: 0,
  },
  {
    question:
      "Welches ist das kleinste und leichteste Element im Periodensystem?",
    Options: ["Helium", "Lithium", "Wasserstoff", "Sauerstoff", "Stickstoff"],
    cur: 2,
  },
];

// Array von IT-Fragen
var itque = [
  {
    question: "Was bedeutet HTML?",
    Options: [
      "Hypertext Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hypertext Markdown Language",
      "Hyperlinking Textual Mark Language",
    ],
    cur: 0,
  },
  {
    question:
      "Welches Protokoll wird häufig verwendet, um Websites zu besuchen?",
    Options: ["FTP", "SMTP", "HTTP", "POP3", "IMAP"],
    cur: 2,
  },

  {
    question:
      "Was ist die richtige Methode, um ein neues HTML-Element zu erstellen?",
    Options: [
      "document.createElement('elementName')",
      "document.createElement()",
      "document.newElement('elementName')",
      "document.newElement()",
    ],
    cur: 3,
  },
  {
    question: "Was ist ein Callback in JavaScript?",
    Options: [
      "Eine Funktion, die nach einer anderen Funktion aufgerufen wird",
      "Eine Funktion, die vor einer anderen Funktion aufgerufen wird",
      "Eine Funktion, die nur einmal aufgerufen wird",
      "Eine Funktion, die wiederholt aufgerufen wird",
    ],
    cur: 3,
  },
  {
    question: "Was ist die Verwendung von `async` und `await` in JavaScript?",
    Options: [
      "Um Asynchronität zu handhaben",
      "Um Schleifen zu unterbrechen",
      "Um Variablen zu deklarieren",
      "Um Werte zu vergleichen",
    ],
    cur: 3,
  },
  {
    question: "Was ist ein Closure in JavaScript?",
    Options: [
      "Eine Funktion, die auf Variablen aus ihrem äußeren Kontext zugreift",
      "Eine Funktion, die keine Argumente akzeptiert",
      "Eine Funktion, die Variablen lokalisiert",
      "Eine Funktion, die eine andere Funktion kapselt",
    ],

    cur: 3,
  },
  {
    question: "Was ist JavaScript?",
    Options: [
      "Eine Programmiersprache",
      "Ein HTML-Tag",
      "Ein CSS-Stil",
      "Ein Datenbankmanagementsystem",
    ],

    cur: 3,
  },
  {
    question: "Was ist IT?",
    Options: [
      "Informationstechnologie",
      "Interaktive Technologie",
      "Internet-Technik",
      "Intelligente Technologie",
    ],
    cur: 3,
  },
];

var Externalarr = getexternalquiz(); // Externe Fragen werden geladen
var n = 0;
var arr = [];
var score = 0; // Variable zur Speicherung des aktuellen Punktestands
var scorediv = document.getElementById("score"); // Referenz zum DOM-Element für die Anzeige des Punktestands
var option = document.getElementById("options"); // Referenz zum DOM-Element für die Anzeige der Optionen
var exam = document.getElementById("exam"); // Referenz zum DOM-Element für den Prüfungsabschnitt
var quiizcategory = ""; // Variable zur Verfolgung, ob externe Fragen verwendet werden

// Funktion zum Anzeigen des entsprechenden Fragetyps basierend auf dem ausgewählten Tab
function tabshow(x) {
  var startdiv = document.getElementById("start"); // 1
  startdiv.style.display = "none";

  var qustiondiv = document.getElementById("question");
  if (x == "Mathe") {
    arr = mathque;
    arr = shuffleArray(arr);
    quiizcategory = "math";
    //qustiondiv.innerHTML = arr[n].question; //Frage anzeigen
 
  katex.render(arr[n].question, qustiondiv);
    showoptions(arr[n].Options); // Antwortmöglichkeiten anzeigen
  }
  if (x == "Allgemeines") {
    arr = allgemeinque;
    qustiondiv.innerHTML = arr[n].question;
    showoptions(arr[n].Options);
  }
  if (x == "IT") {
    arr = itque;
    qustiondiv.innerHTML = arr[n].question;
    showoptions(arr[n].Options);
  }
  if (x == "External") {
    arr = Externalarr;
    quiizcategory = "extenal"; // Flag setzen, um anzuzeigen, dass externe Fragen verwendet werden
    qustiondiv.innerHTML = arr[n].question;
    showoptions(arr[n].Options);
  }
  exam.style.display = "flex"; // Das Prüfungscontainer-Element wird angezeigt und als Flexbox formatiert
  var tabs = document.getElementById("tabs"); // Das Tabs-Element wird abgerufen
  tabs.style.display = "none"; // Die Tabs werden ausgeblendet, da die Prüfung angezeigt wird
  var qs = document.getElementById("qs"); // Das Element für die nächste Frage wird abgerufen
  qs.style.display = "block"; // Das Element für die nächste Frage wird angezeigt
}

//Funktion zum Anzeigen der nächsten Frage
function nextfrage() {
  if (n == arr.length - 1) {
    option.style.display = "none"; // Antwortoptionen ausblenden
    document.getElementById("question").style.display = "none"; // Frage ausblenden
    document.getElementById("frage").style.display = "none"; // Schaltfläche "Nächste Frage" ausblenden
    scorediv.innerHTML = "richtige Antworten:" + score; // Punktestand anzeigen
    n = n + 1; // Fragenindex zurücksetzen
    fortschritt(); // Fortschrittsanzeige aktualisieren
    n = 0; // Fragenindex zurücksetzen
    return;
  }

  n = n + 1; // Nächste Frage
  fortschritt(); // Fortschrittsanzeige aktualisieren
  var qustiondiv = document.getElementById("question"); // Referenz zum DOM-Element für die Frageanzeige
  if(quiizcategory=="math") {
    katex.render(arr[n].question, qustiondiv);

  } else {
    qustiondiv.innerHTML = arr[n].question; // Nächste Frage anzeigen

  }

  showoptions(arr[n].Options); // Antwortmöglichkeiten anzeigen
}

var buttonfarge = document.getElementById("frage");
buttonfarge.addEventListener("click", function () {
  nextfrage();
});

// Funktion zum Anzeigen der Antwortmöglichkeiten
function showoptions(arrop) {
  option.innerHTML = ""; // Antwortoptionen leeren
  document.getElementById("frage").disabled = true;
  arrop.forEach((opt, index) => {
    var bttant = document.createElement("button"); // // Button-Element für Option erstellen
    if(quiizcategory=="math"){
      katex.render(opt, bttant);

    } else {
      bttant.innerHTML = opt; // Optionstext festlegen

    }
    bttant.style.display = "block"; //Button anzeigen
    option.appendChild(bttant); // Button zum DOM hinzufügen
    bttant.addEventListener("click", () => {
      // Ereignislistener für Klick auf Antwortoption
      bttant.style.backgroundColor = "purple";
      document.getElementById("frage").disabled = false; // Schaltfläche "Nächste Frage" aktivieren
      apscore(index); // Punkte aktualisieren

      var buttons = option.getElementsByTagName("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; // Alle Buttons deaktivieren, um Mehrfachklicks zu verhindern
      }
    });
  });
}
// Funktion zur Berechnung der Punkte
function apscore(x) {

  if (quiizcategory == "extenal") {
    // Wenn externe Fragen verwendet werden
    (async () => {
      try {
        const data = await solveQustion(arr[n].id, x);
        console.log(data);
        if (data.success) {
          score++;
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    })();
  } else   {
    if(quiizcategory == "math")
      {


      }else{
        if (x == arr[n].cur) {
          score++;
        }
      }
 
  }

}
// Funktion aktualisiert die Anzeige des Fortschrittsbalkens basierend auf der Anzahl der beantworteten Fragen.
function fortschritt() {
  // Das Fortschrittsbalken-Element wird abgerufen.
  var fortschrittdiv = document.getElementById("fortschritt");

  let percnet = (n / arr.length) * 100; // Der Prozentsatz der beantworteten Fragen wird berechnet.

  fortschrittdiv.style.width = percnet + "%"; // Die Breite des Fortschrittsbalkens wird entsprechend dem berechneten Prozentsatz aktualisiert.
}

function getexternalquiz() {
  // Diese Funktion ruft externe Quizfragen von einem Server ab.
  let quizz = []; // Ein leeres Array für die Quizfragen wird initialisiert.
  for (var i = 0; i < 5; i++) {
    // Eine Schleife, die fünfmal durchlaufen wird, um fünf zufällige Fragen abzurufen.
    let id = Math.floor(Math.random() * 100) + 1; // Eine zufällige Frage-ID wird generiert.
    (async () => {
      // Eine asynchrone Funktion wird ausgeführt, um die Frage vom Server abzurufen.
      try {
        // Die Frage wird vom Server abgerufen.
        const data = await getQuestionFromServerById(id);
        console.log(data);

        // Die abgerufene Frage wird einem Objekt hinzugefügt und dem Array quizz hinzugefügt.
        let quiizzobject = {
          id: data.id,
          question: data.text,
          Options: data.options,
        };

        quizz.push(quiizzobject);
      } catch (error) {
        console.error("Error fetching question:", error); // Fehlerbehandlung, wenn die Frage nicht abgerufen werden kann.
      }
    })();
  }
  //Array mit Quizfragen ausgeben
  return quizz;
}

// Diese Funktion ruft eine externe Quizfrage von einem Server anhand ihrer ID ab.
async function getQuestionFromServerById(questionId) {
  const baseUrl = "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/"; // Die Basis-URL für die API wird definiert.
  const url = baseUrl + questionId; // Die vollständige URL für die Abfrage der Frage wird zusammengesetzt.

  try {
    // Eine Anfrage an den Server wird gesendet, um die Frage abzurufen.
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@gmail.com:secret"),
      },
    });

    // Überprüfung, ob die Anfrage erfolgreich war.
    if (!response.ok) {
      throw new Error("Failed to fetch question: " + response.statusText); //Fehlerbehebung
    }
    //abgerufene Fragen in JSON_ Format umwandeln
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Fehler wird weitergeleitet, um von der aufrufenden Funktion behandelt zu werden.
  }
}

// Diese Funktion sendet die Antwort des Benutzers auf eine externe Quizfrage an den Server.
async function solveQustion(id, index) {
  // Die Basis-URL für die API wird definiert.
  const baseUrl =
    "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/" +
    id +
    "/solve";
  // Die Antwort des Benutzers wird vorbereitet.
  let answer = [];
  answer.push(index);

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@gmail.com:secret"), // Die Autorisierungsdaten werden hinzugefügt.
      },
      body: JSON.stringify(answer), // Die Antwort des Benutzers wird als JSON-Daten im Anfragekörper gesendet.
    });

    // Überprüfung, ob die Anfrage erfolgreich war.
    if (!response.ok) {
      throw new Error("Failed to fetch question: " + response.statusText); //Fehlerbehebung
    }

    // Die Serverantwort wird in das JSON-Format umgewandelt.
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}