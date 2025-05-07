"use strict";

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis
    }
}

let artikli = [];

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

function inicijalizujArtikle() {
    artikli = [
        new Artikal("Laptop", 800, "Laptop najnovije generacije sa najbrzim procesorom"),
        new Artikal("Telefon", 300, "Iphone 15 sa najlepsim korisnickim interfejsom"),
        new Artikal("Tablet", 400, "Ogroman ekran visoke rezulocije"),
        new Artikal("Kamera", 600, "Najlepsa zamena za ljudsko oko"),
    ];

    prikaziArtikle();
    dodajArtikal();
}

document.addEventListener('DOMContentLoaded', inicijalizujArtikle)

function prikaziDetalje(artikal) {
    const detaljiDiva = document.querySelector("#detalji");
    detaljiDiva.innerHTML = "";

    const paragraf = document.createElement("p");
    paragraf.innerHTML = `
        Naziv: ${artikal.naziv} <br>
        Cena: ${artikal.cena} <br>
        Opis: ${artikal.opis}
    `;

    if (detaljiDiva.firstChild) {
        detaljiDiva.firstChild.remove()
    }
    detaljiDiva.appendChild(paragraf);
}

function dodajArtikal() {
    let submitDugme = document.querySelector("#submit-button");
    submitDugme.addEventListener("click", function () {
        const forma = document.querySelector("#dodaj-artikal-forma");
        const formData = new FormData(forma);

        const naziv = formData.get('naziv');
        const cena = formData.get('cena');
        const opis = formData.get('opis');

        // if (naziv && cena && opis) {
        const noviArtikal = new Artikal(naziv, cena, opis);
        artikli.push(noviArtikal);
        forma.reset();
        // } else {
        //     alert("Molimo popunite sva polja.");
        // }
        // OVO SAM KORISTIO DA BIH PROVERIO UNOS I ZASTO MI SE DESAVALO DA MI SE SUMBITUJE FORMA U TABELU A NISTA SE NE ISPISUJE

        prikaziArtikle();
    })
}


