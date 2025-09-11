//let colorArray = ['blue' , 'red' , 'pink' , 'green' ,'brown']
let bodyElem = document.querySelector('body')

setInterval(function(){
    //randomIndex = colorArray[Math.floor(Math.random()* colorArray.length)]
    let redColor = Math.floor(Math.random()* 255)
    let greenColor = Math.floor(Math.random()* 255)
    let blueColor = Math.floor(Math.random()* 255)
    let rgbColor = 'rgb(' + redColor +','+ greenColor+',' + blueColor +')'
    bodyElem.style.backgroundColor = rgbColor
    //console.log()
},3000)
    
