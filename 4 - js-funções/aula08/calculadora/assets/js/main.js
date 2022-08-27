function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.clickButtons();
            this.pressionaEnter();
        },

        clickButtons(){
            document.addEventListener('click', function(e){
                if(e.target.classList.contains('btn-num')){
                    this.btnParaDisplay(e.target.innerText);
                }
                if(e.target.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(e.target.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(e.target.classList.contains('btn-eq')){
                    this.realizaOperacao();
                }
            }.bind(this));
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaOperacao(){
            let operacao = this.display.value;

            try{
                operacao = eval(operacao);
                if(!operacao){
                    alert('Operação inválida');
                    return;
                }
                this.display.value = operacao;
            } catch(e){
                alert('Operação inválida');
            }
        },

        pressionaEnter(){
            this.display.addEventListener('keypress', function(e){
                if(e.keyCode === 13){
                    this.realizaOperacao();
                }
            }.bind(this));
        }
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();