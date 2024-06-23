import { IConta } from "./interfaces/conta.interface";

export class ContaCorrente implements IConta {
  public saldo: number;
  private limiteChequeEspecial: number = 100;

  constructor(public number: string, saldoInicial: number = 0) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente, mesmo com o cheque especial.")
    }
  }

  transferir(valor: number, contaDestino: IConta): void {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      contaDestino.depositar(valor);
    } else {
      console.log("Saldo insuficiente, não será possível a transferência desse valor.")
    }
  }

  exibirSaldo(): void {
    console.log(`O saldo atual da conta é ${this.saldo}`)
  }
}