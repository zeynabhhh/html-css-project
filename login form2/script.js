let usernameInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let spanMassege = document.querySelector('span')
let spanpassword = document.querySelector('.spanpassword')


function usernameInputfunc(){
    if(usernameInput.value.length < 12 ){
        spanMassege.style.display = 'block'
        spanMassege.style.backgroundColor = 'red'
        spanMassege.style.color = '#fff' 
        spanMassege.style.padding = '5px'
    }else {
        spanMassege.style.display = 'block'
        spanMassege.innerHTML = 'یوزرنیم قابل قبول هست'
        spanMassege.style.color = '#fff'
        spanMassege.style.backgroundColor = 'green'
        spanMassege.style.padding = '5px'
        setTimeout(function(){
        spanMassege.style.display = 'none'
    },3000)
    }
     
}

function passwordInputfunc(){
    if(passwordInput.value.length < 8){
        spanpassword.style.display = 'block'
        spanpassword.style.backgroundColor = 'red'
        spanpassword.style.color = '#fff' 
        spanpassword.style.padding = '5px'
    }else {
        spanpassword.style.display = 'block'
        spanpassword.innerHTML = 'پسورد قابل قبول هست'
        spanpassword.style.backgroundColor = 'green'
        spanpassword.style.color = '#fff' 
        spanpassword.style.padding = '5px'
        setTimeout(function(){
        spanpassword.style.display = 'none'
    },3000)
    }
    
}