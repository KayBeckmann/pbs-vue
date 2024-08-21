import { Account } from "@/models/account";
import { defineStore } from "pinia";

export const useAccountStore = defineStore({
  id: "account",
  state: () => ({
    account: [] as Account[],
    count: 0,
  }),
  actions: {
    addAccount(account: Account) {
      account.id = this.account.length + 1;
      this.account.push(account);
    },
    updateAccountById(id: number, updatedAccount: Partial<Account>) {
      const index = this.account.findIndex((account) => account.id === id);
      if (index !== -1) {
        this.account[index] = { ...this.account[index], ...updatedAccount };
      }
    },
    updateAccountByIban(iban: string, updatedAccount: Partial<Account>) {
      const index = this.account.findIndex((account) => account.iban === iban);
      if (index !== -1) {
        this.account[index] = { ...this.account[index], ...updatedAccount };
      }
    },
    deleteAccountById(id: number) {
      const index = this.account.findIndex((account) => account.id === id);
      if (index !== -1) {
        this.account.splice(index, 1);
      }
    },
    deleteAccountByIban(iban: string) {
      const index = this.account.findIndex((account) => account.iban === iban);
      if (index !== -1) {
        this.account.splice(index, 1);
      }
    },
  },
  getters: {
    sum() {
      let sum = 0;
      for (let i = 0; i < this.account.length; i++) {
        sum += this.account[i].balance;
      }
      return sum;
    },
    length() {
      if (this.account.length) {
        return true;
      }
      return false;
    },
  },
});
