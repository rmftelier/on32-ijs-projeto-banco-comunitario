import { IConta } from "./interfaces/conta.interface";

export class ContaPoupanca implements IConta {
    saldo: number; 

    constructor(public numero: string, saldoInicial: number = 0){
      this.saldo = saldoInicial;
    }

    depositar(valor: number): void{
      this.saldo += valor; 
    }

    sacar(valor: number): void{
       if(valor <= this.saldo){
        this.saldo -= valor;
       }else{
        console.log("Saldo insuficiente"); 
       }
    }

    transferir(valor: number, contaDestino: IConta): void {
       if(valor <= this.saldo){
         this.saldo -= valor; 
         contaDestino.depositar(valor);
       }else{
        console.log("Saldo insuficiente");
       }
    }
}