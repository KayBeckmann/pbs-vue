export class Account {
    id: number;
    bank: string;
    iban: string;
    bic: string;
    balance: number;
    open: boolean;
    show: boolean;

    constructor(id:number, bank:string, iban:string, bic:string, balance:number, open:boolean = true, show:boolean = true) {
      this.id = id;
      this.bank = bank;
      this.iban = iban;
      this.bic = bic;
      this.balance = balance;
      this.open = open;
      this.show = show;
    }
  }