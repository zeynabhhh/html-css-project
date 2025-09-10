//let userName = prompt('enter the uuserName')
//let newElementHtml = document.createElement('div')

//newElementHtml.innerHTML = userName // چون اسم متغیر هست پتیشن نمیذاریم

//newElementHtml.setAttribute('id' , 'new-id')// توی پتیشنی که اسم ای دی نوشته شده هیچ فاصله ای نباید باشد
//console.log(newElementHtml)
/*let newForm = document.getElementsByTagName('form')
let newInput = document.createElement('input' , 'email')
newForm.append('newInput')*/

/*
let ulElem = document.getElementById('ul-item')
//چون میخاهیم یک المنت بیاریم فقط از کویری سلکتور و ایدی استفاده میکنیم
let elemLi = document.createElement('li')
elemLi.innerHTML = 'zeynab'

ulElem.append(elemLi)*/
/*

let change = document.getElementById('image')
let button = document.getElementById('button')
change.getAttribute('src')
let onOrOff = false
function changeFunc (){
    //alert('ok')
    if(onOrOff){
        change.setAttribute('src' , 'img/nody-دانلود-عکس-با-فرمت-png-1633987053.png')
        button.innerHTML = 'turn on'
        onOrOff = false
    }else {
        change.setAttribute('src' , 'img/download.png')
        button.innerHTML = 'turn off'
        onOrOff = true // اینجا اسم فلگ نوشته میشود و مقدار ترو یا فالس بهش میدیم
    }
    console.log(onOrOff)
}*/
/*
let userNamejs = document.querySelector('.username')
let passworrdjs = document.querySelector('.password')

let modalBax = document.querySelector('.modal')
//let button =document.getElementsByClassName('button')
function userInfo(){

    let userNameValue = userNamejs.value;
    let passwordValue = passworrdjs.value;
    if(userNameValue.length < 12 ||passwordValue.length < 8){
        modalBax.innerHTML = 'Please Enter True Info'
    }else {
        modalBax.innerHTML = 'Enter To Your Panel'
    }
    console.log(userNameValue , passwordValue)

    setTimeout(function(){
        modalBax.style.display = 'none'
    },3000)
}








*/
let bulb = document.querySelector('img')
let button = document.querySelector('button')

let flag = false

function changeActivity (){
    if(flag === false){
        bulb.setAttribute('src' , 'img/download.png')
        flag = true
        button.innerHTML = 'off'
    }else {
        bulb.setAttribute('src' , 'img/459-4593815_pic-bulboff-on-off-gif-hd-png-download.png')
        flag = false
        button.innerHTML = 'on'
    }
}

