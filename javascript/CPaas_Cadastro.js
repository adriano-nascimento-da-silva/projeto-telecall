//MASCARA Jquery CAMPOS
$(document).ready(function(){
   $('#dataNascimento').mask('00/00/0000');
   $('#telCelular').mask('(+00) 00-0000-0000');
   $('#telFixo').mask('(+00) 00-0000-0000');
   $('#cpf').mask('000.000.000-00');
   $('#login').mask('SSSSSS')
   $('#senha').mask('SSSSSSSS')
   $('#confirmaSenha').mask('SSSSSSSS')
});


/* MOSTRAR SENHA e CONFIRMA SENHA*/
let btn = document.querySelector("#verSenha"); /*acessa páginaCPass_login e procura classe .fa-eye*/

btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha");     /*cria evento de click para fazer algo -aqui mostrar senha-, ao clicar, e através de função que seleciona o id do input*/

    if(inputSenha.getAttribute("type") == "password") {    /*password aqui se refere ao type do input*/
      inputSenha.setAttribute("type", "text");
    }
    else{
      inputSenha.setAttribute("type", "password");  /*A função diz: Se a variável inputSenha for do tipo TYPE -ou seja, igual a password-, troque para texto, senão faça o contrário O evento click -ao clicar na imagem, mostrará o texto. Quando clica novamente, esconderá o texto-  */   
    }
})    

let btnConfirm = document.querySelector("#ConfirSenha"); /*acessa páginaCPass_login e procura classe .fa-eye*/

btnConfirm.addEventListener("click", () => {
    let inputConfirmSenha = document.querySelector("#confirmaSenha")     /*cria evento de click para fazer algo -aqui mostrar senha-, ao clicar, e através de função que seleciona o id do input*/

    if(inputConfirmSenha.getAttribute("type") == "password") {    /*password aqui se refere ao type do input*/
       inputConfirmSenha.setAttribute("type", "text");
    }
    else{
       inputConfirmSenha.setAttribute("type", "password");  /*A função diz: Se a variável inputSenha for do tipo TYPE -ou seja, igual a password-, troque para texto, senão faça o contrário O evento click -ao clicar na imagem, mostrará o texto. Quando clica novamente, esconderá o texto-  */
    }
})    



//VALIDA CAMPO CPF e SENHA
let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let dataNascimento = document.querySelector("#dataNascimento");
let labelDataNascimento = document.querySelector("#labelDataNascimento");
let validDataNascimento = false;

let sexo = document.querySelector("#sexo");
let labelSexo = document.querySelector("#labelSexo");
let validSexo = false;

let endereco = document.querySelector("#endereco");
let labelEndereco = document.querySelector("#labelEndereco");
let validEndereco = false;

let nomeMae = document.querySelector("#nomeMae");
let labelNomeMae = document.querySelector("#labelNomeMae");
let validNomeMae = false;

let cpf = document.querySelector("#cpf");
let labelCpf= document.querySelector("#labelCpf"); //
let validCpf = false;

let login = document.querySelector("#login");
let labelLogin = document.querySelector("#labelLogin");
let validLogin = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmaSenha = document.querySelector("#confirmaSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmasenha = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let telCelular = document.querySelector("#telCelular");
let labelTelCelular = document.querySelector("#labelTelCelular");
let validTelCelular = false;

let telFixo = document.querySelector("#telFixo");
let labelTelFixo = document.querySelector("#labelTelFixo");
let validTelFixo = false;

let mensagemErro = document.querySelector("#erro");
let mensagemSucesso = document.querySelector("#sucesso");


usuario.addEventListener("keyup", () => {     
    if(usuario.value.length == "") {
       labelUsuario.setAttribute("style", "color: red");
       labelUsuario.innerHTML = "*Digite seu nome Completo"
       validUsuario = false;
    }
    else {
       usuario.setAttribute("style", "color: var(--input-text)");
       labelUsuario.setAttribute("style", "color: #7e2525");
       labelUsuario.innerHTML = "*Usuário"
       validUsuario = true;
    }
  })

dataNascimento.addEventListener("keyup", () => {     
    if(dataNascimento.value.length < 10) {
       labelDataNascimento.setAttribute("style", "color: red");
       labelDataNascimento.innerHTML = "*Digite a data nascimento"
       validDataNascimento = false;
    }
    else {
       dataNascimento.setAttribute("style", "color:  var(--input-text)");
       labelDataNascimento.setAttribute("style", "#7e2525")
       labelDataNascimento.innerHTML = "Data Nascimento"
       validDataNascimento = true;
    }
  })

sexo.addEventListener("keyup", () => {     
    if(sexo.value.length == "") {
       labelSexo.setAttribute("style", "color: red");
       labelSexo.innerHTML = "*Digite seu sexo (gênero)"
       validSexo = false;
    }
    else {
       sexo.setAttribute("style", "color:  var(--input-text)");
       labelSexo.setAttribute("style", "color: #7e2525");
       labelSexo.innerHTML = "Sexo"
       validSexo = true;
    }
  })

endereco.addEventListener("keyup", () => {     
    if(endereco.value.length == "") {
       labelEndereco.setAttribute("style", "color: red");
       labelEndereco.innerHTML = "*Digite seu endereço completo"
       validEndereco = false;
    }
    else {
       endereco.setAttribute("style", "color:  var(--input-text)");
       labelEndereco.setAttribute("style", "color: #7e2525");
       labelEndereco.innerHTML = "Endereço Completo"
       validEndereco = true;
    }
  })

nomeMae.addEventListener("keyup", () => {     
    if(nomeMae.value.length == "") {
       labelNomeMae.setAttribute("style", "color: red");
       labelNomeMae.innerHTML = "*Digite nome completo de sua mãe"
       validNomeMae = false;
    }
    else {
       nomeMae.setAttribute("style", "color:  var(--input-text)");
       labelNomeMae.setAttribute("style", "color: #7e2525");
       labelNomeMae.innerHTML = "Nome Mãe"
       validNomeMae = true;
    }
  })

cpf.addEventListener("keyup", () => {     
  if(cpf.value.length < 14) {
     labelCpf.setAttribute("style", "color: red");
     labelCpf.innerHTML = "*Digite o número do seu CPF";
     validCpf = false;
  }
  else {
     cpf.setAttribute("style", "color:  var(--input-text)");
     labelCpf.setAttribute("style", "color: #7e2525");
     labelCpf.innerHTML = "CPF";
     validCpf = true;
  }
})

login.addEventListener("keyup", () => {     
    if(login.value.length < 6) {
       login.setAttribute("style", "color: red");
       labelLogin.setAttribute("style", "color: red");
       labelLogin.innerHTML = "*Digite seu login (6 caracteres)";
       validLogin = false;
    }
    else {
       login.setAttribute("style", "var(--input-text)");
       labelLogin.setAttribute("style", "color: #7e2525");
       labelLogin.innerHTML = "Login"
       validLogin = true;
    }
  })

senha.addEventListener("keyup", () => {     
    if(senha.value.length < 8) {
      labelSenha.setAttribute("style", "color: red");
      labelSenha.innerHTML = "*Digite sua senha de 8(oito) dígitos";
      validSenha = false;
    }
    else{
      labelSenha.setAttribute("style", "color: green");
      labelSenha.innerHTML = "*Digite sua senha de 8(oito) dígitos";
      labelSenha.innerHTML = "Senha";
      validSenha = true;
    }
  })

confirmaSenha.addEventListener("keyup", () => {     
    if(senha.value != confirmaSenha.value) {
      labelConfirmSenha.setAttribute("style", "color: red");
      labelConfirmSenha.innerHTML = "As senhas não conferem";
      validConfirmasenha = false;
      }
    else{
      labelConfirmSenha.setAttribute("style", "color: green");
      labelConfirmSenha.innerHTML = "Senha confirmada!";
      validConfirmasenha = true;
      }
    })

email.addEventListener("keyup", () => {     
    if(email.value.length == "") {
       labelEmail.setAttribute("style", "color: red");
       labelEmail.innerHTML = "*Digite seu e-mail";
       validEmail = false;
    }
    else {
       labelEmail.setAttribute("style", "color: #7e2525");
       labelEmail.innerHTML = "E-mail"
       validEmail = true;
    }
  })
  
 telCelular.addEventListener("keyup", () => {     
    if(telCelular.value.length < 18) {
       labelTelCelular.setAttribute("style", "color: red");
       labelTelCelular.innerHTML = "*Digite o nº Tel. Celular";
       validTelCelular = false;
    }
    else {
       labelTelCelular.setAttribute("style", "color: #7e2525");
       labelTelCelular.innerHTML = "Telefone Celular"
       validTelCelular = true;
    }
  })

telFixo.addEventListener("keyup", () => {     
    if(telFixo.value.length < 18) {
       labelTelFixo.setAttribute("style", "color: red");
       labelTelFixo.innerHTML = "*Digite o nº Tel. Fixo";
       validTelFixo = false;
    }
    else {
       labelTelFixo.setAttribute("style", "color: #7e2525");
       labelTelFixo.innerHTML = "Telefone Fixo"
       validTelFixo = true;
    }
  })

  // VALIDAÇÃO MENSAGEM E GUARDANDO INFORMAÇÕES FORMULÁRIO NO STORAGE
  function cadastrarUser() {
  
      if(validUsuario && validDataNascimento && validSexo && 
      validEndereco && validNomeMae && validCpf && validLogin && 
      validSenha && validConfirmasenha && validEmail && 
      validTelCelular && validTelFixo)
    {
           //cadastrando no Storage
      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

      listaUser.push(
         {
            usuarioCad: usuario.value,
            dataNascimentoCad: dataNascimento.value,
            sexoCad: sexo.value,
            enderecoCad: endereco.value,
            nomeMaeCad: nomeMae.value,
            cpfCad: cpf.value,
            loginCad: login.value,
            senhaCad: senha.value,
            emailCad: email.value,
            telCelularCad: telCelular.value,
            telFixoCad: telFixo.value
         }
      )
      localStorage.setItem("listaUser", JSON.stringify(listaUser))


      mensagemSucesso.setAttribute("style", "display: block"); 
      mensagemSucesso.innerHTML = "Cadastrando usuário...";
      mensagemErro.setAttribute("style", "display: none");
      mensagemErro.innerHTML = "";
      setTimeout(() => {
         window.location.href = "./CPaaS_login.html";
      }, 3000)
      
    }          
    else{
      mensagemErro.setAttribute("style", "display: block");
      mensagemErro.innerHTML = "Preencha todos os campos para cadastro!";
      mensagemSucesso.setAttribute("style", "display: none"); 
      mensagemSucesso.innerHTML = "";
  } 
    }
   



























/*
LOCAL STORAGE
=============
LINHA 260 até LINHA 279
===================
LINHA 261: cria-se uma variável recebe um JSON.parse (transforma as informações do formulário e que vai para o LocalStorage em um arquivo JSON.parse)

**NOTA===> Duas LISTAUSER. Duas listas porque uma é uma variável, e adiciono uma listaUser já existente no LocalStorage.
O array vazio é porque, como ainda não cadastrei ninguém, o ARRAY vazio, vai estar preparado para eu 
começar a cadastrar. A sintaxe é: OU ele adiciona o ARRAY que existe lá (listaUser), ou cria um vazio (qualquer uma destas opções.)

**NOTA2===> Estou criando um objeto dentro de uma lista (listaUser), que terá vários campos
 (formulário). Só pegar os valores (value)do campo dos inputs (nome das variáveis dos ID's) 
 criando um atributo, para não confundir com os nomes dos campos dos 
 inputs (aqui como exemplos: cpfCad, e loginCad), os nomes + .value (valores)

 TERMINANDO: ACRESCENTA O ENDEREÇO DO STORAGE, ao final dos atributos do objeto. e crio um novo registro
 no localStorage (com setItem). Cria-se um novo registro com dois parâmetros: 
 "listaUser" (nome do campo descrito no getItem e com ASPAS). JSON.stringfy(listaUser) - Esta última 
 NÃO TEM ASPAS, porque se trata da variável que criamos com o push acima (listaUser.push)



Onde cadastra?
=============

- Abre o INSPECIONAR com o botão direito na página.
- Aba APPLICATION (vai no canto esquerdo e ver no storage)
*** para limpar este storage, basta LIMPAR DADOS DE NAVEGAÇÃO, em Mais Ferramentas
*/

// função só letras no campo LOGIN
   // $("#login").on("input", function(){
   //    var regexp = /[^a-zA-Z]/g;
   //    if(this.value.match(regexp)){
   //      $(this).val(this.value.replace(regexp,''));
   //    }
   //  });
// função só letras no campo SENHA
   //  $("#senha").on("input", function(){
   //    var regexp = /[^a-zA-Z]/g;
   //    if(this.value.match(regexp)){
   //      $(this).val(this.value.replace(regexp,''));
   //    }
   //  });
// função só letras no campo CONFIRMA SENHA
   //  $("#confirmaSenha").on("input", function(){
   //    var regexp = /[^a-zA-Z]/g;
   //    if(this.value.match(regexp)){
   //      $(this).val(this.value.replace(regexp,''));
   //    }
   //  });