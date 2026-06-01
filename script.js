// Aguarda o HTML carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', function () {

  // ---------- SELECIONANDO OS ELEMENTOS DO FORMULÁRIO ----------
  var btnEnviar      = document.getElementById('btn-enviar');
  var campoNome      = document.getElementById('nome');
  var campoEmail     = document.getElementById('email');
  var campoTurma     = document.getElementById('turma');
  var campoKit       = document.getElementById('kit');
  var msgErro        = document.getElementById('mensagem-erro');
  var msgSucesso     = document.getElementById('mensagem-sucesso');


  // ---------- EVENTO DE CLIQUE NO BOTÃO ----------
  btnEnviar.addEventListener('click', function () {

    // Pega os valores digitados pelo usuário
    var nome   = campoNome.value;
    var email  = campoEmail.value;
    var turma  = campoTurma.value;
    var kit    = campoKit.value;

    // Esconde as mensagens anteriores
    msgErro.classList.add('d-none');
    msgSucesso.classList.add('d-none');


    // ---------- VALIDAÇÃO DOS CAMPOS ----------

    // Verifica se algum campo está vazio
    if (nome === '' || email === '' || turma === '' || kit === '') {
      msgErro.textContent = '⚠️ Por favor, preencha todos os campos!';
      msgErro.classList.remove('d-none');
      return; // Para a execução aqui se tiver erro
    }

    // Verifica se o e-mail tem @ (validação simples)
    if (email.indexOf('@') === -1) {
      msgErro.textContent = '⚠️ Por favor, informe um e-mail válido!';
      msgErro.classList.remove('d-none');
      return;
    }


    // ---------- SE TUDO CERTO, EXIBE MENSAGEM DE SUCESSO ----------
    msgSucesso.textContent = '🎉 Convite reservado com sucesso, ' + nome + '! Em breve você receberá a confirmação no e-mail.';
    msgSucesso.classList.remove('d-none');

    // Limpa o formulário após o envio
    campoNome.value  = '';
    campoEmail.value = '';
    campoTurma.value = '';
    campoKit.value   = '';

  });


  // ---------- SMOOTH SCROLL NOS LINKS DO MENU ----------
  // Seleciona todos os links da navbar que começam com #
  var linksMenu = document.querySelectorAll('a[href^="#"]');

  linksMenu.forEach(function (link) {
    link.addEventListener('click', function (evento) {

      evento.preventDefault(); // Impede o comportamento padrão do link

      var alvo = document.querySelector(this.getAttribute('href'));

      if (alvo) {
        alvo.scrollIntoView({ behavior: 'smooth' });
      }

    });
  });

  // ---------- BOTÃO VOLTAR AO TOPO ----------
  
  var btnTopo = document.getElementById("btnVoltarTopo");

  window.addEventListener('scroll', function() {

    if (window.scrollY > 100) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener('click', function() {
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});
