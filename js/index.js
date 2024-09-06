import Events from './events.js'
Events()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//scrool
document.getElementById('scroll-icon').addEventListener('click', function () {
  const target = document.getElementById('target-section');

  target.scrollIntoView({
    behavior: 'smooth'
  });

  setTimeout(function () {
    const offset = -100;
    window.scrollBy(0, offset);
  }, 500);
});

//zapzap
document.addEventListener('scroll', function () {
  const elementos = document.querySelectorAll('.reveal');

  elementos.forEach(function (elemento) {
    const posicaoElemento = elemento.getBoundingClientRect().top;
    const tamanhoTela = window.innerHeight;

    if (posicaoElemento < tamanhoTela - 100) {
      elemento.classList.add('ativo');
    } else {
      elemento.classList.remove('ativo');
    }
  });
});

//tela inicial
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const mensagem = document.querySelector('.mensagem-inicial');
    mensagem.classList.add('fade-out');

    setTimeout(function () {
      mensagem.style.display = 'none';
      document.querySelector('.inicial').style.display = 'flex';
    }, 1000);
  }, 5000);
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = this.user_name?.value.trim();
  const userEmail = this.user_email?.value.trim();
  const category = this.category.value;
  const message = this.message.value.trim();

  if (!userName || !userEmail || !category || !message) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  emailjs.sendForm('service_8mqwuis', 'template_l6yv1yt', this)
    .then(function () {
      alert('E-mail enviado com sucesso!');
      document.getElementById('contact-form').reset();
    }, function (error) {
      alert('Ocorreu um erro ao enviar o e-mail: ' + JSON.stringify(error));
    });
});
