
'use strict'

const popUpControl = {
    stackStr : [],

}


const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    checkInput()
    console.log('matthew')
})

function checkInput(){
    //get the value from the input
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === ''){
        setErrorFor(username,'Username must be included')
       
    }
    else{
        setSuccessFor(username)
    }

    
    if(emailValue === ''){
        setErrorFor(email,'email must be included')
    }
    else{
        setSuccessFor(email)
    }

    
    if(passwordValue === ''){
        setErrorFor(password,'password must be included')
    }
    else{
        setSuccessFor(password)
    }

    
    if(password2Value === ''){
        setErrorFor(password2,'confirm password must be included')
    }
    else{
        setSuccessFor(password2)
    }
}





function setErrorFor(input, message){
    const formControl = input.parentElement
    // const small = formControl.querySelector('small')
    // small.textContent = message
    formControl.className = 'form-control error'
    popUpControl.stackStr.push(message)
    // console.log(popUpControl.stackStr)

//    document.querySelector('.output').innerHTML = `<ol>${generateListItems(arr)}</ol>`
    // popUpControl.stackStr.forEach(function(el){
    //     console.log(el)
    // })

    document.querySelector('.output').innerHTML = `<ol>${generateListItems(popUpControl.stackStr)}</ol>`
    

    setTimeout(() => {
  const box = document.querySelector('.output');

  // 👇️ removes element from DOM
  box.style.display = 'none';

 
}, 3000);
}


function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}


const generateListItems = function(arg){
    let items = ''
    for(let i = 0; i < arg.length; i++){
        items += `<li>${arg[i]}</li>`
        console.log(items)
    }
    // console.log(items)
    return items
}