let input = document.querySelector('input');
let submit = document.getElementById('submit');
let clear = document.getElementById('clear');
let list = document.querySelector('ul');

if(localStorage.getItem('todo')) {
    list.innerHTML += localStorage.getItem('todo');   
}

submit.addEventListener('click', () => {
    let todo = input.value;

    list.innerHTML += '<li><h3>'+ todo +'</h3></li>';
    input.value="";

    localStorage.setItem('todo', list.innerHTML);
});

clear.addEventListener('click', () => {
    localStorage.clear();
    list.innerHTML = '';
});

