const ullaHome = {
    strasse: 'Hollstrasse',
    hausnummer: 7,
    postleitzahl: 18273,
    ort: 'Güstrow',
    eigentuemer: "Herr Müller",
    toString: function() {
        return this.strasse + ' ' + this.hausnummer + ', ' + this.postleitzahl + ' ' + this.ort + ', ' + this.eigentuemer;
    }
}

console.log(ullaHome);
console.log(ullaHome.toString());
// node .\object-0-0.js

/* 
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

