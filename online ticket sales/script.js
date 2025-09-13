let sities = {
    Usa:['newyourk' , 'log anjeles' , 'sun deigo' , 'colorado'],
    Spain:['barcelona' , 'madrid' , 'bask' , 'andalos' , 'canary'],
    France:['paris' , 'monaco' , 'nant' , 'nice'],
    Ahwaz:['ahwaz' , 'shosh' , 'dezfol' , 'andimeshk' , 'alwan']
}

let selectCountry = document.getElementById('select')
let selectSity = document.getElementById('sity')
//console.log(selectCountry.value)

selectCountry.addEventListener('change' , function(){
   
    if(selectCountry.value === 'select'){
        selectSity.innerHTML = ''
        selectSity.innerHTML += '<option>select country</option>'
    }else {
    let chooseCountry = selectCountry.value
    let sitiseOfCountry = sities[chooseCountry]
    selectSity.innerHTML = '' // باید خاارج از حلقه باشه وگرنه فعال نمیشه 
    sitiseOfCountry.forEach(function(city){
        //selectSity.innerHTML += ''
        selectSity.innerHTML += '<option>'+ city +'</option>' // اگه + رو نداری فقط ایتم ااخری رو اد میکنه
    })
    }
    
})