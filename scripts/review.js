
let counter = 0;

window.addEventListener('DOMContentLoaded', function() {
    const label = document.querySelector("strong");
    const rev = localStorage.getItem("reviews-did");
    if (parseInt(rev) === 0) {
        let counter = 1;
        label.textContent = counter;
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