let del = document.querySelector('#del');
del.addEventListener('click', function() {
    localStorage.removeItem('known')
})

if(localStorage.getItem('known') == null) {
    location.href='../index.html';
}

console.log(localStorage.getItem('known'));

