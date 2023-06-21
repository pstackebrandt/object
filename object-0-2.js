const hollstr7 = {
    strasse: 'Hollstrasse',
    hausnummer: 7,
    postleitzahl: 18273,
    ort: 'Güstrow',
    eigentuemer: "Herr Müller",

    toString: function () {
        return this.strasse + ' ' + this.hausnummer + ', ' + this.postleitzahl + ' ' + this.ort + ', ' + this.eigentuemer;
    },

    mieter: [
        {
            // Vorname, Nachname, Wohnungsnummer, Kaltmiete
            vorname: 'Hans',
            nachname: 'Meier',
            wohnungsnummer: 1,
            kaltmiete: 500
        },
        {
            vorname: 'Peter',
            nachname: 'Schmidt',
            wohnungsnummer: 2,
            kaltmiete: 600
        },
        {
            vorname: 'Anna',
            nachname: 'Müller',
            wohnungsnummer: 3,
            kaltmiete: 550
        },
        {
            vorname: 'Maria',
            nachname: 'Schneider',
            wohnungsnummer: 4,
            kaltmiete: 700
        }
    ]
}

console.log(hollstr7);
console.log(hollstr7.mieter[2]);
// node .\object-0-2.js


/* 
Objekt 0.2
Erweitere das Objekt durch ein Array.
Dieses Array soll vier Mietparteien darstellen, jede in einem eigenen Objekt.
Jedes Mietparteien-Objekt soll enthalten:

Vorname
Nachname
Wohnungsnummer
Kaltmiete

Objekt 0.0

Lege ein Objekt an, das für ein Gebäude die folgenden Informationen enthält:

Strasse
Hausnummer
Postleitzahl
Ort
Eigentümer 

Objekt 0.1
Füge zu dem Objekt eine Methode hinzu, welche als Rückgabewert die gesamte Adresse als String liefert.
Benutze diese Methode, um die gesamte Adresse auszugeben.

*/

