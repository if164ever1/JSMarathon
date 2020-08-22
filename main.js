const btn = document.getElementById('btn-kick');
const btn_health = document.getElementById('health');

const character = {
    name:   'Pickachu',
    defaultHP: 100,
    damageHP:100,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character'),
}

const enemy = {
    name:   'Charmannder',
    defaultHP: 100,
    damageHP:100,
    elHP: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy'),
}

btn.addEventListener('click', function (){
    console.log('Kick');
    changeHP(random(10), character);
    changeHP(random(10), enemy); 
});

btn_health.addEventListener('click', function(){
   
    PlusHP(random(10), character);
    PlusHP(random(10), enemy); 
});



function init(){
    console.log('Start game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person){
    rebderHPLife(person);
    renderProgressbarHP(person);
}

function rebderHPLife(person){
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressbarHP(person){
    person.elProgressBar.style.width = person.damageHP + '%';
}

function changeHP(count, person){
    if(person.damageHP < count){
        person.damageHP = 0;
        alert(person.name + ' is lost!');
        btn.disbled = true;
    }else{
        person.damageHP -= count;
    }
    renderHP(person);
}

let flag = true;
function PlusHP(count, person){
    if(flag){
        person.damageHP += 15;
        flag = false;
        console.log('Kick111');
    }
}

function random(num){
    return Math.ceil(Math.random()*num);
}

init();