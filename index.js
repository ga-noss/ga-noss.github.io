let date = new Date()
let year = date.getFullYear();

let footerDate = document.getElementById('footerDate');
footerDate.innerHTML = year;

let hided = document.querySelector('#cacher');
hided.addEventListener('click', function() {
    let code = prompt('Please enter the code');

    if (code === '2612') {
        localStorage.setItem('known', true);
        location.href = 'Hidden/hidden.html';
    } else {
        location.reload();
    }
})