import User from './class/User';
import 'bootstrap/scss/bootstrap.scss' //si je met bootstrap en dessous des imports css et scss la couleur du lien marche pas
import './scss/style.scss';
import "./css/style.css";


console.log("Hello World!");

const user = new User('john', 'doe');

console.log(`Bjr ${user.getFullName()}`);

document.querySelector('p').textContent = "yoyo";

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))

//si on fait git init
//un fichier .git apparait
//on met ce code dedans:
//  /nodes_modules/
//  /dist/
