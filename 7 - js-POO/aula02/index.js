

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " ja ligado");
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " ja desligado");
      return;
    }
    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico("Televisão");

/* Smartphone is a class that extends the DispositivoEletronico class and has a
constructor that takes in a name, a color, and a model and passes the name to
the super class. */

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone("Iphone", "Preto", "11");

s1.ligar();
s1.ligar();

console.log(s1)