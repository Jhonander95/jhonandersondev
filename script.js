const btn = document.getElementById('button');


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_7dit2ni';

   let email = document.getElementById('to_email');
   let messaje = document.getElementById('message');

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      email.value = '';
      messaje.value = '';
    }, (err) => {
      
      
    });
});