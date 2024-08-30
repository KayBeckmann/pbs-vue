import type { UUID } from "crypto";

export class Account {
  id: UUID;
  bank: string;
  iban: string;
  bic: string;
  startbalance: number;
  balance: number;
  owner: UUID;
  open: boolean;
  show: boolean;

  constructor(
    id: string,
    bank: string,
    iban: string,
    bic: string,
    balance: number,
    owner: UUID,
    open: boolean = true,
    show: boolean = true
  ) {
    this.id = id;
    this.bank = bank;
    this.iban = iban;
    this.bic = bic;
    this.startbalance = balance;
    this.owner = owner;
    this.open = open;
    this.show = show;
    this.balance = balance;
  }
}
