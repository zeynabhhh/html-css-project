let usernameInput = document.getElementById ('username')
let spanMassegeUsername = document.querySelector('.username-error')
let passwordInput = document.getElementById('password')
let spanPasswordMassege = document.querySelector('.password-error')
function usernamefocus(){
    spanMassegeUsername.style.display = 'block'
    spanMassegeUsername.style.backgroundColor = 'red'
    setTimeout(function(){
        spanMassegeUsername.style.display = 'none'
    } , 3000)
}
function usernameBlur (){
    if(usernameInput.value.length < 12){
        spanMassegeUsername.style.display = 'block';
        spanMassegeUsername.innerHTML = 'یوزرنیم نباید کمتر از 12 کاراکتر باشد';
        spanMassegeUsername.style.backgroundColor = 'red';
    }else {
        spanMassegeUsername.style.display = 'block';
        spanMassegeUsername.innerHTML = 'تعداد کاراکترهای یوزرنیم اوکی هست';
        spanMassegeUsername.style.backgroundColor = 'green';
    }

}

function passwordfocus(){
    spanPasswordMassege.style.display = 'block';
    spanPasswordMassege.style.backgroundColor = 'red';
    setTimeout(function(){
        spanPasswordMassege.style.display = 'none';
    } , 3000)
}
function passwordBlur (){
    if(passwordInput.value.length < 8){
        spanPasswordMassege.style.display = 'block';
        spanPasswordMassege.innerHTML = 'پسورد حداقل باید 8 کاراکتر باشد';
        spanPasswordMassege.style.backgroundColor = 'red';
    }else {
        spanPasswordMassege.style.display = 'block';
        spanPasswordMassege.style.backgroundColor = 'green';
        spanPasswordMassege.innerHTML = 'تعداد کاراکتر های پسورد اوکی هست'
    }
}