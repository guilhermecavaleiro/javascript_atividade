const form = document.getElementById('form-entrada-numeros');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagemSucesso = "Validado, o campo B é maior do que o campo A";
const mensagemErro = "Por favor, verifique se o campo B é maior do que o campo A";


function validaBMaior(valorDeA, valorDeB) {
    return valorDeB > valorDeA;
}

form.addEventListener ('submit', function(e){
    e.preventDefault();

    if(validaBMaior(campoA.value, campoB.value)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.sucess-message').innerHTML = mensagemSucesso;
        document.querySelector('.sucess-message').style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        document.querySelector('.sucess-message').style.display = 'none';
        document.querySelector('.error-message').innerHTML = mensagemErro;
        document.querySelector('.error-message').style.display = 'block';

    }
})