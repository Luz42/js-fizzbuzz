console.log('JS OK!')
/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”
al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/


//E' STATO CREATO UN CONTAINER NELL'HTML
const containerHTML = document.querySelector('.container');

//stampare in console numeri da 1 a 100

for (let numbers = 1; numbers <= 100; numbers++){
    
    //stampare FIZZBUZZ sui multipli di 3 e di 5, invece del numero
    
    /*
    una volta avviato il ciclo entrerà nelle varie condizioni, 
    quando la condizione si verifica entrerà in quella determinata condizione, 
    altirmenti proseguirà nella prossima, 
    fino a che tutte quelle che non si sono fermate nelle condizioni precedenti, arriveranno all'ultima
    */

    /*
    NB bisogna considerare l'ordine delle condizioni, 
    se prima considerasse solo i multipli di 3 non arriverebbe alla condizione che potrebbe essere anche multiplo di 5
    */

    const cell = document.createElement('div')
    cell.className = 'cell'
   
    let text = ''

    if (numbers % 3 === 0 && numbers % 5 === 0){
        console.log('FizzBuzz')
        text = 'FizzBuzz'
        cell.classList.add('red')
    }
    //stampare BUZZ sui multipli di 5, invece del numero
    else if (numbers % 5 === 0){
        console.log('Buzz')
        text = 'Buzz'
        cell.classList.add('yellow')
    }
    //stampare FIZZ sui multipli di 3, invece del numero
    else if (numbers % 3 === 0){
        console.log('Fizz')
        text = 'Fizz'
        cell.classList.add('green')
    }
    //se non rientra nelle precedenti condizioni allora:
    else{
        console.log(numbers)
        text = numbers
    }

    cell.innerHTML = text
    console.log('questo è il contenuto', text)
    console.log(cell)
    containerHTML.append(cell)
}

//BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
//BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.







