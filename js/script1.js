/* VALIDAR SENHA */
const validator = () =>{
    let password = document.getElementById("password").value
    let confirmpassword = document.getElementById("confirmpassword").value

    if (password != confirmpassword){
        document.getElementById("error").style.display="flex"        
        
    }else{
        document.getElementById("btn-cadastrar").setAttribute("href", "login.html")
    }
    
}
/***************************************************************************************/
/* pop-up */

/**************************************************************************************/

/*selecionar imagem*/
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
