import express, { Request, Response, } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {

    res.send("bienvenue sur notre serveur d'API")
})

const port = 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personnale Node Server is listenning on http://localhost:${port}`);
    console.log('Shutdown node server ctrl + c')
})