const form = document.getElementById('cadastroForm');

const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');
const campoConfirma = document.getElementById('confirmaSenha');
const campoPerfil = document.getElementById('perfil');
const campoTermos = document.getElementById('termos');

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroSenha = document.getElementById('erroSenha');
const erroConfirma = document.getElementById('erroConfirma');
const erroPerfil = document.getElementById('erroPerfil');
const erroTermos = document.getElementById('erroTermos');

const mensagemSucesso = document.getElementById('mensagemSucesso');

const painelSaida = document.getElementById('painelSaida');
const avisoVazio = document.getElementById('avisoVazio');

function limparErros() {
  erroNome.innerText = '';
  erroEmail.innerText = '';
  erroSenha.innerText = '';
  erroConfirma.innerText = '';
  erroPerfil.innerText = '';
  erroTermos.innerText = '';
  mensagemSucesso.innerText = '';
}

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  limparErros();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const senha = campoSenha.value;
  const confirma = campoConfirma.value;
  const perfil = campoPerfil.value;

  let tudoCerto = true;

  if (nome === '') {
    erroNome.innerText = 'Por favor, preencha o nome completo.';
    tudoCerto = false;
  }

  if (email === '') {
    erroEmail.innerText = 'Por favor, preencha o e-mail.';
    tudoCerto = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    erroEmail.innerText = 'Digite um e-mail válido (exemplo: nome@escola.edu.br).';
    tudoCerto = false;
  }

  if (senha === '') {
    erroSenha.innerText = 'Por favor, digite uma senha.';
    tudoCerto = false;
  } else if (senha.length < 6) {
    erroSenha.innerText = 'A senha precisa ter no mínimo 6 caracteres.';
    tudoCerto = false;
  }

  if (confirma === '') {
    erroConfirma.innerText = 'Por favor, confirme a senha.';
    tudoCerto = false;
  } else if (senha !== confirma) {
    erroConfirma.innerText = 'As senhas não conferem!';
    tudoCerto = false;
  }

  if (perfil === '') {
    erroPerfil.innerText = 'Selecione um perfil técnico.';
    tudoCerto = false;
  }

  if (campoTermos.checked === false) {
    erroTermos.innerText = 'Você precisa aceitar os termos de uso.';
    tudoCerto = false;
  }

  if (tudoCerto === false) {
    return;
  }

  document.getElementById('saidaNome').innerText = nome;
  document.getElementById('saidaEmail').innerText = email;
  document.getElementById('saidaPerfil').innerText = perfil;

  painelSaida.hidden = false;
  avisoVazio.hidden = true;

  mensagemSucesso.innerText = 'Cadastro realizado com sucesso!';

  form.reset();
});