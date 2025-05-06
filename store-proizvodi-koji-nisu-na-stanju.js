"use strict";

class Artikal {
    constructor(id, naziv, cena, dostupnost) {
        this.id = id;
        this.naziv = naziv;
        this.cena = cena;
        this.dostupnost = dostupnost;
    }
}



const artikli = [
    new Artikal(1, "Laptop", 800, true),
    new Artikal(2, "Telefon", 300, false),
    new Artikal(3, "Tablet", 400, true),
    new Artikal(4, "Kamera", 600, false),
];

function prikaziArtikle() {
    const tabela = document.getElementById("artikli");

    for (let i = 0; i < artikli.length; i++) {
        const artikal = artikli[i];

        const red = document.createElement("tr");

        const idCelija = document.createElement("td");
        idCelija.textContent = artikal.id;

        const nazivCelija = document.createElement("td");
        nazivCelija.textContent = artikal.naziv;

        const cenaCelija = document.createElement("td");
        cenaCelija.textContent = artikal.cena + "RSD";

        const dostupnostCelija = document.createElement("td")
        dostupnostCelija.textContent = artikal.dostupnost ? "Na stanju" : "Nema na stanju";

        if (!artikal.dostupnost) {
            red.style.backgroundColor = "red";
        }

        red.appendChild(idCelija);
        red.appendChild(nazivCelija);
        red.appendChild(cenaCelija);
        red.appendChild(dostupnostCelija);

        tabela.appendChild(red);
    }
}

window.onload = prikaziArtikle;