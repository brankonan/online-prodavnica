"use strict";

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis
    }
}

const artikli = [
    new Artikal("Laptop", 800, "Laptop najnovije generacije sa najbrzim procesorom"),
    new Artikal("Telefon", 300, "Iphone 15 sa najlepsim korisnickim interfejsom"),
    new Artikal("Tablet", 400, "Ogroman ekran visoke rezulocije"),
    new Artikal("Kamera", 600, "Najlepsa zamena za ljudsko oko"),
];

function prikaziArtikle() {
    const tableBody = document.querySelector("#artikli tbody");
    tableBody.innerHTML = "";

    for (let i = 0; i < artikli.length; i++) {
        const artikal = artikli[i];
        const red = document.createElement("tr");

        const idCelija = document.createElement("td");
        idCelija.textContent = i + 1;
        red.appendChild(idCelija);

        const nazivCelija = document.createElement("td");
        nazivCelija.textContent = artikal.naziv;
        red.appendChild(nazivCelija);

        const cenaCelija = document.createElement("td");
        cenaCelija.textContent = artikal.cena;
        red.appendChild(cenaCelija);

        const opisCelija = document.createElement("td");
        opisCelija.textContent = artikal.opis;
        red.appendChild(opisCelija);

        red.addEventListener("click", function () {
            prikaziDetalje(artikal);
        })

        tableBody.appendChild(red);
    }
}

function prikaziDetalje(artikal) {
    const detaljiDiva = document.querySelector("#detalji");
    detaljiDiva.innerHTML = "";

    const paragraf = document.createElement("p");
    paragraf.innerHTML = `
        Naziv: ${artikal.naziv} <br>
        Cena: ${artikal.cena}
        Opis: ${artikal.opis}
    `;

    detaljiDiva.appendChild(paragraf);
}

prikaziArtikle();