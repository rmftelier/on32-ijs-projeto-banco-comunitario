import { Banco } from "./banco";

const banco = new Banco();

const cliente1 = banco.criarCliente("1", "Roberta Meyrelles", "Rua 12, 475", "98825-6111", 1250);
const cliente2 = banco.criarCliente("2", "Larissa Duarte", "Rua São Paulo, 784", "98876-5432", 600);

const contaCorrente = banco.criarContaCorrente(cliente1);
const contaPoupanca = banco.criarContaPoupanca(cliente2);


if (contaCorrente) {
  contaCorrente.depositar(1000);
  contaCorrente.sacar(200);
  console.log(`Saldo atual da conta corrente de Roberta Meyrelles: ${contaCorrente.saldo}`)
}


contaPoupanca.depositar(500);
contaPoupanca.sacar(100);
console.log(`Saldo atual da conta poupança de Larissa Duarte: ${contaPoupanca.saldo}`);

