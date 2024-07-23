import { Account } from "@/models/account";
import { defineStore } from "pinia";

export const useAccountStore = defineStore({
  id: "account",
  state: () => ({
    account: [] as Account[],
    count: 0,
  }),
  actions: {
    addAccount(newAccount: Account) {
      this.account.push(newAccount);
    },
    updateAccountById(id: number, updatedAccount: Partial<Account>) {
      const index = this.account.findIndex(account => account.id === id);
      if (index !== -1) {
        this.account[index] = { ...this.account[index], ...updatedAccount };
      }
    },
    updateAccountByIban(iban: string, updatedAccount: Partial<Account>) {
      const index = this.account.findIndex(account => account.iban === iban);
      if (index !== -1) {
        this.account[index] = { ...this.account[index], ...updatedAccount };
      }
    },
  },
  getters: {
    oddOrEven() {
      if (this.count % 2 === 0) {
        return "even";
      }
      return "odd";
    },
    oddOrEvenArrow: (state) => {
      if (state.count % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    },
  },
});
