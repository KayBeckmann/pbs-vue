export class Account {
    id: number;
    bank: string;
    iban: string;
    bic: string;
    open: boolean;
    show: boolean;

    constructor(id:number, bank:string, iban:string, bic:string, open:boolean, show:boolean) {
      this.id = id;
      this.bank = bank;
      this.iban = iban;
      this.bic = bic;
      this.open = open;
      this.show = show;
    }
  }