
function NaoAtualizar(){
    const form = document.querySelector(".form");
    const peso = document.querySelector(".peso");
    const altura = document.querySelector(".altura");
    const resultado = document.querySelector(".resultado");
   
    function recebeEventoForm(evento){
        evento.preventDefault();
        const imc = (Number(peso.value))/(Number(altura.value)*Number(altura.value));
        let qualificacion = " ";
        if( imc < 18.5){
            qualificacion = "Abaixo do Peso";
        }
        else if( imc >= 18.5 && imc < 25){
            qualificacion = "Peso Ideal";
        }  
        else if( imc >= 25 && imc < 30){
            qualificacion = "Sobrepeso";
        }
        else if( imc >= 30 && imc < 35){
            qualificacion = "Obesidade Grau I";
        }
        else if( imc >= 35 && imc < 40){
            qualificacion = "Obesidade Grau II";
        }
        else if( imc >= 40){
            qualificacion = "Obesidade Grau III";
        }
        resultado.innerHTML = `<p>Seu IMC: ${imc.toFixed(2)} (${qualificacion})</p>`;
    };
    form.addEventListener('submit', recebeEventoForm);
}
NaoAtualizar();