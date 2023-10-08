const mon = document.querySelector('.monchart');
const tue = document.querySelector('.tuechart');
const wed = document.querySelector('.wedchart');
const thu = document.querySelector('.thuchart');
const fri = document.querySelector('.frichart');
const sat = document.querySelector('.satchart');
const sun = document.querySelector('.sunchart');
const chartvalue = document.querySelectorAll('.chartvalue');
const monvalue = document.querySelector('.chartvalue--1');
const tuevalue = document.querySelector('.chartvalue--2');
const wedvalue = document.querySelector('.chartvalue--3');
const thuvalue = document.querySelector('.chartvalue--4');
const frivalue = document.querySelector('.chartvalue--5');
const satvalue = document.querySelector('.chartvalue--6');
const sunvalue = document.querySelector('.chartvalue--7');
const body = document.querySelector('body');


body.addEventListener('mouseover', (e) =>{
    e.stopPropagation();
    monvalue.classList.add('hide');
    tuevalue.classList.add('hide');
    wedvalue.classList.add('hide');
    thuvalue.classList.add('hide');
    frivalue.classList.add('hide');
    satvalue.classList.add('hide');
    sunvalue.classList.add('hide');
});
mon.addEventListener('mouseover', (e) =>{
    e.stopPropagation();
    monvalue.classList.remove('hide');
    tuevalue.classList.add('hide');
    wedvalue.classList.add('hide');
    thuvalue.classList.add('hide');
    frivalue.classList.add('hide');
    satvalue.classList.add('hide');
    sunvalue.classList.add('hide');
});
tue.addEventListener('mouseover', (e) =>{
    e.stopPropagation();
    monvalue.classList.add('hide');
    tuevalue.classList.remove('hide');
    wedvalue.classList.add('hide');
    thuvalue.classList.add('hide');
    frivalue.classList.add('hide');
    satvalue.classList.add('hide');
    sunvalue.classList.add('hide');
});
wed.addEventListener('mouseover', (e) =>{
    e.stopPropagation();
    monvalue.classList.add('hide');
    tuevalue.classList.add('hide');
    wedvalue.classList.remove('hide');
    thuvalue.classList.add('hide');
    frivalue.classList.add('hide');
    satvalue.classList.add('hide');
    sunvalue.classList.add('hide');
});
thu.addEventListener('mouseover', (e) =>{
    e.stopPropagation();
    monvalue.classList.add('hide');
    tuevalue.classList.add('hide');
    wedvalue.classList.add('hide');
    thuvalue.classList.remove('hide');
    frivalue.classList.add('hide');
    satvalue.classList.add('hide');
    sunvalue.classList.add('hide');
});
fri.addEventListener('mouseover', (e) =>{
    e.stopPropagation();
    monvalue.classList.add('hide');
    tuevalue.classList.add('hide');
    wedvalue.classList.add('hide');
    thuvalue.classList.add('hide');
    frivalue.classList.remove('hide');
    satvalue.classList.add('hide');
    sunvalue.classList.add('hide');
});
sat.addEventListener('mouseover', (e) =>{
    e.stopPropagation();
    monvalue.classList.add('hide');
    tuevalue.classList.add('hide');
    wedvalue.classList.add('hide');
    thuvalue.classList.add('hide');
    frivalue.classList.add('hide');
    satvalue.classList.remove('hide');
    sunvalue.classList.add('hide');
});
sun.addEventListener('mouseover', (e) =>{
    e.stopPropagation();
    monvalue.classList.add('hide');
    tuevalue.classList.add('hide');
    wedvalue.classList.add('hide');
    thuvalue.classList.add('hide');
    frivalue.classList.add('hide');
    satvalue.classList.add('hide');
    sunvalue.classList.remove('hide');
});