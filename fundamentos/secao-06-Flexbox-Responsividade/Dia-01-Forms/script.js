const submitBtn = document.querySelector('.submitForm');
const form = document.querySelector('#form');
const clear = document.querySelector('.clear');
const checkboxChecked = document.querySelector("#inp-checkbox-1");

submitBtn.addEventListener('click', handleSubmit)
clear.addEventListener('click', ()=>{
    form.reset();
})
checkboxChecked.addEventListener('change', isChecked)
function isChecked(){
    const checkboxChecked = document.querySelector("#inp-checkbox-1");
    submitBtn.disabled = !checkboxChecked.checked;
}
function invalidInput(){
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
    const name = document.querySelector('#name').value.length;
    const invalidName = name < 10 || name > 40;
    const textArea = document.querySelector('#inp-textarea').value.length;
    const invalidArea = textArea > 500;

    if(invalidArea || invalidEmail || invalidName){
        return false
    } else {
        return true
    }
}
function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }