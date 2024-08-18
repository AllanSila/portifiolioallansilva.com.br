
const calcular = document.getElementById("calcular")

function imc(){

    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const result = document.getElementById("resultado");

    if (nome !=='' || altura !==''|| peso !== ''){

        const imc = (peso / (altura*altura)).toFixed(1);

        let classificacao = '';

        if (imc < 18.5){
            classificacao ='abaixo do peso'
            result.textContent = `Seu IMC é igual a ${imc}, vc está ${classificacao}`
            result.style.backgroundColor= "#1e5128"
        
        }else if(imc < 25){
            classificacao ='com o peso ideal'
            result.textContent = `Seu IMC é igual a ${imc}, vc está ${classificacao}`
            result.style.backgroundColor= "#1e5128"

        }else{
            classificacao ='com sobrepeso'
            result.textContent = `Seu IMC é igual a ${imc}, vc está ${classificacao}`
            result.style.backgroundColor= "#1e5128"
        }
        
        result.style.display= "block"

    }else {
        result.textContent = "PREENCHA TODOS OS CAMPOS"
        result.style.backgroundColor= "#4c0027"
        result.style.display= "block"
    }
}

calcular.addEventListener("click",imc)