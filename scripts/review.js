
let counter = 0;

window.addEventListener('DOMContentLoaded', function() {
    const label = document.querySelector("strong");      //Guardo la etiqueta en una variable
    const rev = localStorage.getItem("reviews-did");    //Tomo el valor de la clave y lo guardo en una variable
    if ((parseInt(rev) === 0) || (rev === NaN) || (rev === null)){                            //Controlo que el valor de la clave no sea 0
        let counter = 1;                                  //El contador será 1
        label.textContent = counter;
        localStorage.setItem("review-did", counter);

    }
    else {
        counter = parseInt(rev);
        label.textContent = rev;
        counter ++;
        localStorage.setItem("reviews-did", counter);
    }
});