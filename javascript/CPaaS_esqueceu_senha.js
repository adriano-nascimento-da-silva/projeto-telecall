// MÁSCARA CPF
$(document).ready(function(){
  $('#cpf').mask('000.000.000-00');

// função só letras no campo SENHA
  $("#senha").on("input", function(){
    var regexp = /[^a-zA-Z]/g;
    if(this.value.match(regexp)){
      $(this).val(this.value.replace(regexp,''));
    }
  });
// função só letras no campo CONFIRMA SENHA
  $("#confirmaSenha").on("input", function(){
    var regexp = /[^a-zA-Z]/g;
    if(this.value.match(regexp)){
      $(this).val(this.value.replace(regexp,''));
    }
  });

  
/* LABELS DO FORMULÁRIO NÃO SOBREPÕEM ESCRITA*/
let inputs = document.getElementsByClassName('input-form');
		for (let input of inputs) {
			input.addEventListener("blur", function() {
				if(input.value.trim() != ""){
					input.classList.add("has-val");
				} else {
					input.classList.remove("has-val");
				}
			});
		}
  })

/* MOSTRAR SENHA e CONFIRMA SENHA*/
let btn = document.querySelector("#verSenha"); /*acessa páginaCPass_login e procura id .fa-eye*/

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
let cpf = document.querySelector("#cpf");
let labelCpf= document.querySelector("#labelCpf");
let validCpf = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmaSenha = document.querySelector("#confirmaSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmasenha = false;

let mensagemErro = document.querySelector("#erro1");
let mensagemSucesso = document.querySelector("#sucesso1");

cpf.addEventListener("keyup", () => {     
  if(cpf.value.length < 14) {
     labelCpf.setAttribute("style", "color: red");
     labelCpf.innerHTML = "*Digite o número do seu CPF";
     validCpf = false;
  }
  else {
     cpf.setAttribute("style", "color: var(--input-text)");
     labelCpf.innerHTML = " ";
     validCpf = true;
  }
})

senha.addEventListener("keyup", () => {     
  if(senha.value.length < 8) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "*Digite sua senha de 8(oito) dígitos";
    validSenha = false;
  }
  else{
    senha.setAttribute("style", "color: var(--input-text)");
    labelSenha.innerHTML = "*Digite sua senha de 8(oito) dígitos";
    labelSenha.innerHTML = " ";
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
    labelConfirmSenha.setAttribute("style", "var(--input-text)");
    labelConfirmSenha.innerHTML = " ";
    labelConfirmSenha.setAttribute("style", "color: green");
    labelConfirmSenha.innerHTML = "Senhas confirmadas";
    validConfirmasenha = true;
    }
  })

  // VALIDAÇÃO MENSAGEM
function cadastrar() {
  if(validCpf && validSenha && validConfirmasenha) { 
    mensagemSucesso.setAttribute("style", "display: block"); 
    mensagemSucesso.innerHTML = ("Fazendo login para página principal") 
    mensagemErro.setAttribute("style", "display: none");
    mensagemErro.innerHTML = " ";
    setTimeout(() => {
      window.location.href = "./CPaaS_login.html";
   }, 3000)
  }          
  else{
    mensagemErro.setAttribute("style", "display: block");
    mensagemErro.innerHTML = ("Preencha todos os campos corretamente!");
    mensagemSucesso.setAttribute("style", "display: none"); 
    mensagemSucesso.innerHTML = " ";
  }
}




/* 

LINHA 3 ==> BLUR este é um efeito, acontece quando clicamos nos inputs e as LABELS, SPANS não sobresrevem, onde está digitando
LINHA 5 ==> Se o campo tiver algo digitado, MANTENHA O CAMPO PARA CIMA, E NÃO DESÇA.

LOCAL STORAGE
=============

Onde cadastra?
=============

- Abre o INSPECIONAR com o botão direito na página.
- Aba APPLICATION (vai no canto esquerdo e ver no storage)
*** para limpar este storage, basta LIMPAR DADOS DE NAVEGAÇÃO, em Mais

*/