let indice = 0;
const imagens = document.querySelectorAll('.carrossel img');

function mudarImagem(direcao) {
  indice += direcao;
  if (indice < 0) {
    indice = imagens.length - 1;
  } else if (indice >= imagens.length) {
    indice = 0;
  }
  const carrossel = document.querySelector('.carrossel');
  carrossel.style.transform = `translateX(-${indice * 100}%)`;
}




(function(){
  emailjs.init("krRMRc7P0qBVsrpaa"); 
})();

document.getElementById('contato-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name && email && message) {
      sendEmail(name, email, message);
  } else {
      alert('Preencha todos os campos.');
  }
});

function sendEmail(name, email, message) {
  emailjs.send("service_rpc9n7c", "template_5d1qnwk", {
      from_name: name,
      from_email: email,
      message: message
  })
  .then(function(response) {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('contato-form').reset();
  }, function(error) {
      alert('Erro ao enviar mensagem: ' + error.text);
  });
}


