// Задание 1:

// C помощью цикла создать список из 20 элементов.
// Каждый 3-й элемент сделать синим.
// Каждый 5-й - зеленым.

let someList = document.getElementById('some-list');
for (let i = 1; i <= 20; i++) {
    let someListItem = document.createElement('li');
    someListItem.innerText = i;
    someList.append(someListItem);
}

// Задание 2:
// Создать на странице разметку:
// <h1 id="user-name"></h1>
// спросить у пользователя его имя (prompt), и вывести в данный h1.

let userName = prompt('Ваше имя?');

let title = document.getElementById('user-name');
title.innerText = userName;

// Задание 3:
//  Дан ul. Дан массив любых строк. Вставьте элементы этого массива в конец ul так, 
//  чтобы каждый элемент стоял в своем li. ul создайте на странице заблаговременно.

let str = ['HTML', 'CSS', 'Java Script', 'SCSS'];
let listOfStings = document.querySelector('#string-list');

for (let i = 0; i < str.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerText = str[i];
    listOfStings.append(newLi);
}

// Задание 4:

//  Дан элемент #elem1. Вставьте перед ним span с текстом '!!!'.
//  Дан элемент #elem1. Вставьте после него span с текстом '!!!'.
//  Дан элемент #elem1. Вставьте ему в начало span с текстом '!!!'.
//  Дан элемент #elem1. Вставьте ему в конец span с текстом '!!!'.

let elem1 = document.getElementById('elem1');
let span = document.createElement('span');
span.innerText = '!!!';

// elem1.before(span);
// elem1.after(span);
// elem1.prepend(span);
elem1.append(span);


// Задание 5:

// Напишите функция, для установки цвета фона абзаца.
// должна вызываться так: setBg(element, 'red')

function setBg (id, color) {
    let paragraph = document.getElementById(id);
    paragraph.style.backgroundColor = color;
}

setBg('qwerty', 'red');


// Задание 6:

// Напишите функцию, которая выводит в HTML документ нумерованный список песен:
// Стили на ваше усмотрение

let playList = [
{
author: "LED ZEPPELIN",
song:"STAIRWAY TO HEAVEN"
},
{
author: "QUEEN",
song:"BOHEMIAN RHAPSODY"
},
{
author: "LYNYRD SKYNYRD",
song:"FREE BIRD"
},
{
author: "DEEP PURPLE",
song:"SMOKE ON THE WATER"
},
{
author: "JIMI HENDRIX",
song:"ALL ALONG THE WATCHTOWER"
},
{
author: "AC/DC",
song:"BACK IN BLACK"
},
{
author: "QUEEN",
song:"WE WILL ROCK YOU"
},
{
author: "METALLICA",
song:"ENTER SANDMAN"
}
];

let songList = document.querySelector('ol');

for (let i = 0; i < playList.length; i++) {
    let songListItem = document.createElement('li');
    songListItem.innerHTML = `
    <b>Author:</b> ${playList[i].author};<br>
    <b>Song:</b> ${playList[i].song};
    `;
    songList.append(songListItem);
}

// Задание 7:

// Нарисовать галлерею используя объекты автомобилей, которые мы создавали в ДЗ прошлого урока.
// К каждой модели авто добавить картинку.

const kiaRio = {
    name: 'Kia Rio',
    year: 2006,
    weight: 1040,
    corpusType: 'seddan',
    engineCapacity: 1.4,
    brakeSystem: 'ABS',
    transmissionType: 'manual',
    roof: 'whole',
    image: './images/KiaRio.jpg'

}
const fordMustang = {
    name: 'Ford Mustang',
    year: 2019,
    weight: 2065,
    corpusType: 'sedan',
    engineCapacity: 3.2,
    brakeSystem: 'ABS',
    transmissionType: 'automatic',
    roof: 'cabriolet',
    image: './images/FordMustang.jpg'

}
const camaro = {
    name: 'Chevrolet Camaro',
    year: 1976,
    weight: 2430,
    corpusType: 'sedan',
    engineCapacity: 5,
    brakeSystem: 'ABS',
    transmissionType: 'manual',
    roof: 'whole',
    image: './images/camaro.jpg'

}
const toyotaPrado = {
    name: 'Toyota Prado',
    year: 2016,
    weight: 3250,
    corpusType: 'jeep',
    engineCapacity: 4.5,
    brakeSystem: 'ABS',
    transmissionType: 'automatic',
    roof: 'whole',
    image: './images/prado.jpg'

}
const ferrariF50 = {
    name: 'Ferrari F50',
    year: 1995,
    weight: 3250,
    corpusType: 'coupe',
    engineCapacity: 4.7,
    brakeSystem: 'ABS',
    transmissionType: 'manual',
    roof: 'cabriolet',
    image: './images/ferrariF50.jpg'

}
const cars = [kiaRio, fordMustang, camaro, toyotaPrado, ferrariF50];

let gallery = document.getElementById('gallery');
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';

for (let i = 0; i < cars.length; i++) {
    let galleryItem = document.createElement('div');
    galleryItem.style.marginBottom = '15px';
    galleryItem.style.marginRight = '15px';
    let galleryImage = document.createElement('img');
    galleryImage.style.width = '400';
    galleryImage.style.height = '250px';
    galleryImage.src = cars[i].image;
    let galleryImageDesc = document.createElement('div');
    galleryImageDesc.style.textAlign = 'center'
    galleryImageDesc.innerHTML = `
    <p>Название: ${cars[i].name}</p>
    <p>Год выпуска: ${cars[i].year}</p>
    <p>Объем двигателя: ${cars[i].engineCapacity}</p>
    `;
    galleryItem.append(galleryImage);
    galleryItem.append(galleryImageDesc);
    gallery.append(galleryItem);
}