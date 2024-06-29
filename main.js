$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true,
        loop:true
      },
      600:{
        items:1,
        nav:false,
        loop:true
      },
      1000:{
        items:1,
        nav:true,
        loop:true
      }
    }
  });
});
function send () {
  let email = document.getElementById('email');
  let messaje = document.getElementById('messaje');

  console.log(email.value, messaje.value);

  const serviceID = 'default_service';
  const templateID = 'template_7dit2ni';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      
      alert('Sent!');
    }, (err) => {
      
      alert(JSON.stringify(err));
    });

  email.value = "";

  messaje.value = "";

} 

