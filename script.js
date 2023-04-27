document.addEventListener("DOMContentLoaded", function() {
    const username = document.querySelector('.name');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const birthdate = document.querySelector('.birthdate');
    const cpf = document.querySelector('.cpf');
    const phone = document.querySelector('.phone');
    const creditcard = document.getElementById('card');
    const cardflag = document.getElementById('cardflag');


    creditcard.addEventListener('input', function(e) {
  // Remove qualquer espaço que tenha sido adicionado anteriormente
  let value = e.target.value.replace(/\s/g, '');

  // Adiciona espaço a cada 4 caracteres
  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  // Atualiza o valor do input com o novo valor formatado
  e.target.value = value;
});

    cardflag.style.visibility = "hidden";
    let image = document.querySelector('.cardflag');

    creditcard.addEventListener('input', function() {
        const bandeira = validarCartao(creditcard.value.replace(/\s+/g, ''));
        switch(bandeira) {
            case 'Desconhecido':
                image.src = 'img/negado.png'
                cardflag.classList.remove('background-color');
                break;
            case 'Mastercard':
                image.src = 'img/teste1.png';
                break;
            case 'Visa': 
                image.src = 'img/teste2.png';
                break;
        }


        creditcard.addEventListener('input', function() {

            if(bandeira.value === ''){
                cardflag.style.visibility = "hidden";
            } else {
                cardflag.style.visibility = "visible";
            }
        });


      });

      
      
      function validarCartao(creditcard) {
        const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})/;
        const mastercardRegEx = /^5[1-5][0-9]{14}/;
        
        if (visaRegEx.test(creditcard)) {
          return "Visa";
        } else if (mastercardRegEx.test(creditcard)) {
          return "Mastercard";
        } else {
          return "Desconhecido";
        }
      }
    });



function validateForm(){
    
}