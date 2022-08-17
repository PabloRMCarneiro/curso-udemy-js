function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log("Saldo insuficiente");
    return;
  }
  this.saldo -= valor;
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
};

Conta.prototype.verSaldo = function (valor) {
  console.log(
    `Ag: ${this.agencia} | Conta: ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
  );
};

const conta1 = new Conta(11, 22, 100);

function contaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;

contaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log("Saldo insuficiente");
    return;
  }
  this.saldo -= valor;
};

const conta2 = new contaCorrente(11, 22, 0, 100);

conta2.depositar(10);
conta2.sacar(90);
conta2.verSaldo();
