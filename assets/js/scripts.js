let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width ='100%'

email.style.width='100%'

assunto.style.width='100%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length<3){
        txt.innerHTML ="nome inválido"
        txt.style.color ="red"
    }else{
        let nomeOk = true
        txt.innerHTML ="nome válido"
        txt.style.color ="green"
        
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')==-1 || email.value.indexOf(".")==-1){
        txtEmail.innerHTML ="email inválido"
        txtEmail.style.color="red"

    }else{
        let emailOk= true
        txtEmail.innerHTML ="email válido"
        txtEmail.style.color="green"
       

    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length>100){
        txtAssunto.innerHTML ="texto maior que o esperado"
        txtassunto.style.color="red"
    }else{
        let assuntoOk = true
        txtAssunto.innerHTML ="texto válido para envio"
        txtAssunto.style.color="green"
        
    }
}
function enviar(){
    if(nomeOk == true && emailOk ==true && assuntoOk==true ){
        alert('Formulário enviado com Sucesso')

    }
}
function zoom(){
mapa.style.width ='1000px'
mapa.style.height ='900px'
}
function normal(){
    mapa.style.width ='600px'
    mapa.style.height ='450px'
}