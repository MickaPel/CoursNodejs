require('colors')

//le mot cle async permet de créer des fonctions qui retournent des Promises()
async function success() {
    //dans une fonction async, "return" permet de definir que la Promises est en réussite (reslove)
    return 'bravo !'.green;
}

async function fail() {
    //dans une fonction async, "throw" permet de definir que la Promises est en réussite (reject)
    return new Error('dommage..'.red)
}

success().then(console.log())
fail().catch(console.log())

function randomNumber() {
    const number = Math.floor(Math.random() * 10);

    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(number)
        }, 2500)
    })
}

async function addition() {
    console.log('recuperation de la premiere valeur'.yellow)
    const a = await randomNumber();
    console.log('premiere valeur recuperé'.green)
    console.log('recuperation de la 2nd valeur'.yellow)
    const b = await randomNumber();
    console.log('2nd valeur recuperé'.green)

    console.log('addition'.yellow)
    console.log(`${a} + ${b} = ${a+b}`)
}

console.log('avant addition')
addition();
console.log('apres addition')
