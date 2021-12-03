const btn = document.querySelector('.link')
const body = document.querySelector('body')
const text = document.querySelector('#username')
const h1 = document.querySelector('h1')
let num = 2;
btn.addEventListener('click',()=>{
    num += 1;
    if (num%2==0){
        body.classList.add('day')
        body.classList.remove('night')
    }
    else{
        body.classList.remove('day')
        body.classList.add('night')
    }    
})
text.addEventListener('input',()=>{
    h1.textContent = text.value
})