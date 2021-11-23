import IMask from 'imask';

const maskPhone = {
  mask: '+{7}(000)000-00-00'
}
const maskEmail = {
  mask: /^\S*@?\S*$/
}

document.addEventListener('DOMContentLoaded', () => {
  var maskFormPhone = IMask(document.querySelector('input[name="client_phone"]'), maskPhone);
  var maskFormMail = IMask(document.querySelector('input[name="client_mail"]'), maskEmail);
})

