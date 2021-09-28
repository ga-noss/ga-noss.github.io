let villeChoisie = 'Tokyo';
recevoirTemperature(villeChoisie);

let btn = document.querySelector('#changer');

btn.addEventListener('click', () => {
    villeChoisie = prompt('De quelle ville voulez vous la météo?');
    recevoirTemperature(villeChoisie);
});

function recevoirTemperature(ville){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

    let request = new XMLHttpRequest();

    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.responseType = 'json';
    request.send(`q=${ville}`);

    request.onload = function(){
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                let response = request.response;
                document.querySelector('#ville').textContent = response.name;
                document.querySelector('#temperature_label').textContent = response.main.temp;
            } else {
                alert('Une erreur est survenue merci de ressayer ultérieurement');
            }
        }
    }
}