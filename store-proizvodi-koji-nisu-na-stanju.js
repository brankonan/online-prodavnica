"use strict";

class Artikal {
    constructor(id, naziv, cena, dostupnost) {
        this.id = id;
        this.naziv = naziv;
        this.cena = cena;
        this.dostupnost = dostupnost;
    }
}



let grafickaKartaGigatron = new Artikal(1, "GTX-4060", 780, true);
let tvGigatron = new Artikal(2, "LG-TV", 880, false);
let misGigatron = new Artikal(3, "Logitech-ZG-230", 30, true);

const artikliProdavnica = [grafickaKartaGigatron, tvGigatron, misGigatron];