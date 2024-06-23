import { Cliente } from "./cliente/cliente";
import { ContaCorrente } from "./contas/conta-corrente";
import { ContaPoupanca } from "./contas/conta-poupanca";
import { IConta } from "./contas/interfaces/conta.interface";

export class Banco {
  private clientes: Cliente[] = [];
  private contas: IConta[] = [];

  //Criar Cliente
  criarCliente(id: string, nomeCompleto: string, endereco: string, telefone: string, rendaSalarial: number): Cliente {

    const cliente = new Cliente(id, nomeCompleto, endereco, telefone, rendaSalarial);
    this.clientes.push(cliente);
    return cliente;
  }

  //Criar Conta Corrente
  criarContaCorrente(cliente: Cliente): ContaCorrente | null {
    if (cliente.rendaSalarial >= 500) {
      const conta = new ContaCorrente(`CC-${cliente.id}`, 0);
      this.contas.push(conta);
      return conta;
    } else {
      console.log("Cliente não possui renda suficiente para abrir uma conta corrente");
      return null;
    }
  }

  criarContaPoupanca(cliente: Cliente): ContaPoupanca {
    const conta = new ContaPoupanca(`CP-${cliente.id}`, 0);
    this.contas.push(conta);
    return conta;
  }
}