let submit = document.getElementById('submit');
let clear = document.getElementById('clear');
let list = document.querySelector('ul');

if(localStorage.getItem('todo')) {
    list.innerHTML += localStorage.getItem('todo');   
}

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let todo = submit.input.value;

    list.innerHTML += '<li><h3>'+ todo +'</h3></li>';
    submit.reset();

    localStorage.setItem('todo', list.innerHTML);
});

clear.addEventListener('click', () => {
    localStorage.clear();
    list.innerHTML = '';
});