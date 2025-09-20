let imageArray = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/download.jpg'
]

let cityDatas = {
    ahwaz: {city: 'Ahwaz', temp: 45 , weather: 'suny' , humidity: 32 , windSpeed: 5} , 
    shiraz: {city: 'Shiraz' , temp: 25 , weather: 'cluody' , humidity: 21 , windSpeed: 12} , 
    tehran: {city: 'Tehran',temp: 31 , weather: 'rainy' , humidity: 14 ,windSpeed: 23}
}

let cityName = document.querySelector('.city');
let tempp = document.querySelector('.temp');
let info = document.querySelector('.info')
let button = document.querySelector('.button')
let inputValues = document.getElementById('search')


button.addEventListener('click' , function(){
    let inputValue = inputValues.value
    console.log(inputValue)
    let mainInputValue = cityDatas[inputValue]
    if(mainInputValue){
        cityName.innerHTML = "Weather In " + mainInputValue.city
        tempp.innerHTML = mainInputValue.temp + 'C'
        info.innerHTML = mainInputValue.weather 
    }else {
        alert('enter the name of city')
    }
})


function onlod(){
    let randomBack = Math.floor(Math.random() * imageArray.length)
    //console.log(randomBack)
    document.body.style.backgroundImage = 'url(' + imageArray[randomBack] + ')'
} 
onlod()


















/*



button.addEventListener('click' , function(){
    let searchValue = inputValue.value
    let mainSearchValue = cityDatas[searchValue]
    console.log(mainSearchValue)

    if(mainSearchValue){
        cityName.innerHTML = mainSearchValue.city
        tempp.style.display = 'block '
        tempp.innerHTML = mainSearchValue.temp
        info.innerHTML = mainSearchValue.weather
    }else {
        alert("شهر مورد نظر را درست انتخاب کنید")
    }
})
*/