import { ContaTipoEnum } from "../enums/conta-tipo.enum";

export interface IConta {
  saldo: number;
  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(valor: number, contaDestino: IConta): void;
}