function alerta(){
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var data = document.getElementById("nasc").value;
    var sex_M = document.querySelector('input[name="sex"]:checked').value;
    var sex_F = document.querySelector('input[name="sex"]:checked').value;
    
    if(!nome || !cpf || !email){
        alert("Preenche todos os campos abaixo");
    }
    

}