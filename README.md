js-array-carousel
===

**Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

**MILESTONE 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

**MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 3**
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

## SVOLGIMENTO

1.  Inserisco gli elementi HTML;
2.  Inserisco tutte  le immagini su un array;
3.  Inizializzo un contatore di immagini a 0;
4.  Creo un ciclo dell'array delle immagini che ad ogni ciclo mi aggiunge un tag con l'immagine all'interno del '.items-wrapper' e del '.thumbnail-wrapper';
5.  Creo una variabile che mi toglie la classe hide al primo elemento;
6.  Creo una variabile che mi aggiunge la classe active al tag 'thumb';
7.  Al click delle frecce all'aumentare o decrementare del contatore, rimette o toglie la classe 'hide' e la classe 'active' ai loro rispettivi tag.