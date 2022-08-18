class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume++;
    }

    diminuirVolume(){
        this.volume--;
    }

    static trocaPilha(){
        console.log('troca de pilha');
    }

}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

ControleRemoto.trocaPilha();