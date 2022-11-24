// Module Ecmascript

export default class Voiture {

    #marque;
    #modele;

    constructor(marque, modele) {
        this.#marque = marque;
        this.#modele = modele;
    }

    detail() {
        return `Voiture [marque = ${this.#marque}; modele = ${this.#modele}]`
    }
}