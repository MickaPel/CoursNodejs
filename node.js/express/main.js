import express from "express";
import path from 'path'

const app = express(); //init express

//middleware
app.use( function(req, res, next) {
    console.log(`Request: ${req.url}`);
    next(); //la fonction next() permet de passer au middleware suivant
})
app.use( express.static(path.join(__dirname, 'public')) );

// route = Verb HTTP (GET,POST) + URL (/contact)
/**
 * GET     -> Lire
 * POST    -> Créer
 * DELETE  -> Supprimer
 * PATCH   -> Remplacer (modification partielle)
 * PUT     -> Mettre a jour (modification totale)
 */

app.get('/', (request, response) => {

    const html = `<h1>Bienvenue sur le serveur Node Express</h1>`;

    response.send(html); //send() ne met pas fin a la fonction anonyme (controller)

})

//affiche les resultats au format json
app.get('/users', (req,res) => {

    //users est un jeu de donnée d'exemple uniquement
    const users = [
        {id: 1, firstname: 'john', lastname: 'doe', city: 'toulouse'},
        {id: 2, firstname: 'johny', lastname: 'cash', city: 'paris'}
    ]
    //.json -> affiche les donnees au foramt json et applique les entetes http nécessaires
    //Content-Type: application/json
    res.json(users) 
})

app.get('/users/:id', (req, res, next) => {
    //params permet de recuperer les parametres d'url
    //params est un objet
    const id = req.params.id;

    if( 1 != id) { //si l'utilisateur n'existe pas
        next(); //on affiche une 404
    }

    res.json({id: 1, firstname: 'john', lastname: 'doe', city: 'toulouse'})
})

//comment appeler manuellement la page 404
app.get('/no-route', (req, res, next) => {
    console.log('Je suis dans no route !')
    next();
})

//si aucune route n'a ete trouvé alors on affiche une 404
app.get('*', (req, res, next) => {

    res.status(404).send('<h1>Not found</h1>')
})

app.listen(3200, 'localhost', () => {
    console.log('Personnale Node Server is listenning on http://localhost:3200');
    console.log('Shutdown node server ctrl + c')
})


//demmarer serveur avec nodemon (pour ne pas le redemarrer a chaque changement): npx nodemon <nom dossier(et fichier)>
//on ajouté dans package.json, dans "scripts", une clé "express" pour pouvoir lancer le serveur differement: npm run express 