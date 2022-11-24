
//class User est un module
export default class User {


    #firstname;
    #lastname;

    constructor(firstname = "", lastname = ""){
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    getFullName() {
        return `${this.#firstname} ${this.#lastname}`;
    }

}