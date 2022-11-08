const submitBtn = document.querySelector('.submitForm')
const form = document.querySelector('#form')
const clear = document.querySelector('.clear')

submitBtn.addEventListener('click', (event)=>{
    console.log('teste')
    event.preventDefault()
})
clear.addEventListener('click', ()=>{
    form.reset()
})

function isChecked(){
    if(document.querySelector("#inp-checkbox-1").checked){
        console.log('xablau')
        submitBtn.addEventListener('click', ()=>{
            form.submit()
        })
    }
}
isChecked()