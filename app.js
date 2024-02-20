let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
})

let products = [
    {
        id: 1,
        name:'PRODUCT NAME 1',
        image: '1.PNG',
        price: 4999
    },
    {
        id: 2,
        name:'PRODUCT NAME 2',
        image: '2.PNG',
        price: 5499
    },
    {
        id: 3,
        name:'PRODUCT NAME 3',
        image: '3.PNG',
        price: 4599
    },
    {
        id: 4,
        name:'PRODUCT NAME 4',
        image: '4.PNG',
        price: 999
    },
    {
        id: 5,
        name:'PRODUCT NAME 5',
        image: '5.PNG',
        price: 1999
    },
    {
        id: 6,
        name:'PRODUCT NAME 6',
        image: '6.PNG',
        price: 4999
    }
];