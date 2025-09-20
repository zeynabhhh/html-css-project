//let $ = document;
let h1Elem = document.getElementById('h1-element');
let inputBox = document.querySelector('#text');
let convertBox = document.getElementById('convert');
let resetBox = document.getElementById('reset');
let changeBox = document.getElementById('change');
let result = document.getElementById('result');


let changeElem = true

changeBox.addEventListener('click' , function(){
    
    if(changeElem){
        h1Elem.innerHTML = 'convert *C to *F'
        changeElem = false
        inputBox.setAttribute('placeholder' , '*C')
        document.title = '*C to *F'
        //console.l-og(changeElem)
    }else{
        h1Elem.innerHTML = 'convert *F to *C'
        changeElem = true
        inputBox.setAttribute('placeholder' , '*F ')
        document.title = '*F to *C'
        //console.log(changeElem)
    }
})

resetBox.addEventListener('click' , function(){
    result.innerHTML = ''
    inputBox.value = ''
})

convertBox.addEventListener('click' , function(){
    if (inputBox.value === ''){
        result.innerHTML = 'No Value'
    }else {
         if(h1Elem.innerHTML === 'convert *C to *F' ){ ///همیشه هواست به = باشه که حتما باید == یا === باشد چون تک مساوی به معنای انتساب است
            let inputValue = inputBox.value
            let inputFinalValue = (inputValue * 9/5) + 32
            result.innerHTML = inputValue + '*C to ' + inputFinalValue + '*F'      
            result.style.color = 'yellow'   
         }else if (h1Elem.innerHTML === 'convert *F to *C'){
            let inputValue = inputBox.value
            let inputFinalValue = (inputValue - 32 ) * 5/9
            result.innerHTML = inputValue + '*F to ' + inputFinalValue.toFixed(2) + '*C'
            result.style.color = 'yellow'
         }

    }
})