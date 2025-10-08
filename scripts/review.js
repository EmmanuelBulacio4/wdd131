
let counter = 0;

window.addEventListener('DOMContentLoaded', function() {
    const label = document.querySelector("strong");
    const rev = localStorage.getItem("reviews-did"); 
    if ((parseInt(rev) === 0) || (rev === NaN) || (rev === null)){ 
        counter++;                          
        localStorage.setItem("reviews-did", counter);
        label.textContent = counter;
    }
    else {
        counter = parseInt(rev);
        counter ++;
        localStorage.setItem("reviews-did", counter);
        label.textContent = counter;
    }
});