
let counter = 0;

window.addEventListener('DOMContentLoaded', function() {
    const label = document.querySelector("strong");
    const rev = localStorage.getItem("reviews-did");
    if (Number(rev) === 0) {
        const counter = 1;
        rev.localStorage.setItem("review-did", counter);
        label.textContent = counter;

    }
    else {
        counter = Numer(rev);
        label.textContent = rev;
        counter ++;
        localStorage.setItem("reviews-did", counter);
    }
});