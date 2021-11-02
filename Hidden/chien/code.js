let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const url = 'https://dog.ceo/api/breeds/image/random';

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                let response = request.response;
                let chien = response.message;
                let img = document.querySelector('img');
                img.src  = chien;
            }
        }
    }
});
