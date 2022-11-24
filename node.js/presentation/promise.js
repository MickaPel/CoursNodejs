const colors = require('colors');

function lancerDes() {
    //[0; 1]
    const value = Math.floor(Math.random() * 6 + 1);
    const fail = Math.floor(Math.random() * 3 + 1);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( fail == 1) {
                resolve(value);
            }

            reject('Cassé');
        }, 1000)

    });
}

lancerDes().then((value) => {
    console.log(`resultat: ${colors.green(value)}`)
}).catch((error) => {
    console.log(`${colors.red(error)}`)
}).finally(() => {
    console.log('Recommencer ?')
    console.log('-------------------');
});

//-----------------------

lancerDes() //1er lancer
.then((value) => { //resultat premier lancer
    console.log(`1er resultat: ${colors.green(value)}`)

    return lancerDes(); //second lancer
})
.then((value) => { //resultat 2nd lancer
    console.log(`2nd resultat: ${colors.green(value)}`)
})
.catch((error) => { //err commune aux deux lancers
    console.log(`${colors.red(error)}`)
})
.finally(() => {
    console.log('Recommencer ?')
    console.log('-------------------');
});

//--------------------------

Promise.all([lancerDes(), lancerDes()]).then((values) => {
    const [val1, val2] = values;

    console.log(`1er resultat double lancé: ${colors.green(val1)}`)
    console.log(`2nd resultat double lancé: ${colors.green(val2)}`)
}).catch((error) => {
    console.log(`${colors.red(error)}`)
})
.finally(() => {
    console.log('Recommencer ?')
});
