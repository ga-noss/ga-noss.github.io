let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const input  = form.texte

    console.log(input.value);
    input.value = input.value.toUpperCase();
    input.select();
    document.execCommand('copy');
    input.value = '';
})