let reviews = document.querySelectorAll('.review');
let submitButton = document.querySelector('.submit-button');
let error = document.querySelector('.error');

for (let review of reviews) {
    review.onchange = function() {
        if (review.dataset.evaluation === 'good') {
            submitButton.disabled = false;
            error.classList.remove('shown');
        } else {
            submitButton.disabled = true;
            error.classList.add('shown');
        };
    };
};