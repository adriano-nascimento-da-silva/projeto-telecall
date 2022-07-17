// MÁSCARA CPF
$(document).ready(function(){
  $('#cpf').mask('000.000.000-00');
  $('#senha').mask('SSSSSSSS')
  })
  
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

/* MOSTRAR SENHA*/
let btn = document.querySelector(".fa-eye"); /*acessa páginaCPass_login e procura classe .fa-eye*/

btn.addEventListener("click", ()=>{
    let inputSenha = document.querySelector("#senha");     /*cria evento de click para fazer algo -aqui mostrar senha-, ao clicar, e através de função que seleciona o id do input*/

    if(inputSenha.getAttribute("type") == "password"){    /*password aqui se refere ao type do input*/
      inputSenha.setAttribute("type", "text");
    }
    else{
      inputSenha.setAttribute("type", "password");  /*A função diz: Se a variável inputSenha for do tipo TYPE -ou seja, igual a password-, troque para texto, senão faça o contrário O evento click -ao clicar na imagem, mostrará o texto. Quando clica novamente, esconderá o texto-  */   
    }
})    

//VALIDA CAMPO CPF e SENHA
let cpf = document.querySelector("#cpf");
let labelCpf = document.querySelector("#labelCpf");
let validCpf = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let mensagemErro = document.querySelector("#erro");
let mensagemSucesso = document.querySelector("#sucesso");

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
  if(senha.value.length < 8){
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "*Digite sua senha de 8(oito) dígitos";
    validSenha = false;
  }
  else{
    senha.setAttribute("style", "color: var(--input-text)");
    labelSenha.innerHTML = " ";
    validSenha = true;
  }
})

function entrar() {
  if(validCpf && validSenha) { 
    mensagemSucesso.setAttribute("style", "display: block"); 
    mensagemSucesso.innerHTML = ("Fazendo login para página principal") 
    mensagemErro.setAttribute("style", "display: none");
    mensagemErro.innerHTML = " ";
    setTimeout(() => {
      window.location.href = "./CPaaS.html";
   }, 3000) 
  }         
  else{
    mensagemErro.setAttribute("style", "display: block");
    mensagemErro.innerHTML = ("Preencha todos os campos corretamente!");
    mensagemSucesso.setAttribute("style", "display: none"); 
    mensagemSucesso.innerHTML = " ";
  }
}

// FAZER AS CONFIGURAÇÕES ACIMA NO CPaaS ESQUECEU SENHA e CPaaS USUÁRIO E DEPOIS CRIAR STORAGE



/* 

IMPORTANTE:
===========

POR CONVENÇÃO E BOAS PRÁTICAS DEVE SE ESCREVER PRIMEIRO, NO CÓDIGO:
VARIÁVEIS -  nas primeiras linhas
EVENTOS - nas demais linhas 
FUNÇÕES - nas demais linhas



LINHA 3 ==> BLUR este é um efeito, acontece quando clicamos nos inputs e as LABELS, SPANS não sobresrevem, onde está digitando
LINHA 5 ==> Se o campo tiver algo digitado, MANTENHA O CAMPO PARA CIMA, E NÃO DESÇA.
LINHA 31 ==> KEYUP - Este evento se dá, quando você está digitando e levanta o dedo do teclado. Então, tudo que digitarmos no teclado, a máquina vai contar como digitado

LINHA 60 ==> // não precisa pôr a expressão: if( validCpf || validSenha == false), 
                pois abaixo das variáveis e atributos já temos a afirmação falsa. 
                Agora, temos de convertê-las, para validar, ir a TRUE

CAMPOS 77 ==> Por causa deste validar campos, não ficará duas mensagens.
                */ 


/*
CÓDIGO SEM AS VALIDAÇÕES
========================

let cpf = document.querySelector("#cpf");
let labelCpf = document.querySelector("#labelCpf");
let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");

cpf.addEventListener("keyup", () => {     
  if(cpf.value.length < 14) {
     labelCpf.setAttribute("style", "color: red");
     labelCpf.innerHTML = "*Digite o número do seu CPF";
     cpf.setAttribute("style", "border: red");
    
  }
  else {
     cpf.setAttribute("style", "color: var(--input-text)");
     labelCpf.innerHTML = " ";
  }
})

senha.addEventListener("keyup", () => {     
  if(senha.value.length < 8){
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "*Digite sua senha de 8(oito) dígitos";
  }
  else{
    senha.setAttribute("style", "color: var(--input-text)");
    labelSenha.innerHTML = " ";
  }
})

function entrar(){
  
}
*/ 