let userNameInput =  document.querySelector('#username');
let userpasswordInput = document.querySelector('#password');
let modalMassege = document.querySelector('.modal')
function checkInfo (){
    let userName = userNameInput.value
    let userpassword = userpasswordInput.value
    if(userName.length < 12 || userpassword.length < 8 ){
        modalMassege.innerHTML = 'please enter true information'
        modalMassege.style.backgroundColor = 'red'
        modalMassege.style.display = 'block'
    }else {
        modalMassege.style.display = 'block'
        modalMassege.innerHTML = 'welcome to your panel'
        modalMassege.style.backgroundColor = 'green'
    }
    setTimeout(function(){
        modalMassege.style.display = 'none'
    } , 3000)
}
