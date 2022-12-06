/*FIREBASE*/
    

/* VALIDAR SENHA 
const validator = () =>{
    let password = document.getElementById("password").value
    let confirmpassword = document.getElementById("confirmpassword").value

    if (password != confirmpassword){
        document.getElementById("error").style.display="flex";
        return false;
    }else{
        return true;
    }
    
}
****************************************************************************************/
/* pop-up */

/**************************************************************************************/

/*selecionar imagem
function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {

    let files =   Array.from(input.files);
    console.log(files);
    };    
    input.click();

}

/********************************************************************/
/*NAVEGACAO ENTRE PAGINAS*/
function inicial(){
    window.location.href = "index.html";
}
function login(){    
    window.location.href = "home.html";
}
function criarConta(){
    window.location.href = "criarConta.html";
}
function registrar(){
    window.location.href = "login.html";
}
function recuperar(){    
    window.location.href = "recuperarSenha.html";
}
function novaVacina(){
    window.location.href = "novaVacina.html";
}
function editarVacina(){
    window.location.href = "editarVacina.html";
}
/********************************************************************/
