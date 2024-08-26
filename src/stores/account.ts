import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import { ref } from "vue";
import { Account } from "@/models/account"; // Pfad zu deiner Account-Klasse

export const useAccountStore = defineStore("account", () => {
  const accounts = ref<Account[]>([]);

  // Funktion zum Laden der Daten von Supabase
  const fetchAccounts = async () => {
    const { data, error } = await supabase
      .from("accounts") // Tabellenname in Supabase
      .select("*");

    if (error) {
      console.error("Error fetching accounts:", error);
      return;
    }

    // Mappe die Daten auf die Account-Klasse
    accounts.value = data.map(
      (item: any) =>
        new Account(
          item.id,
          item.bank,
          item.iban,
          item.bic,
          item.balance,
          item.open,
          item.show
        )
    );
  };

  // Funktion zum Hinzufügen oder Aktualisieren eines Accounts
  const saveAccount = async (account: Account) => {
    const { error } = await supabase.from("accounts").upsert({
      id: account.id,
      bank: account.bank,
      iban: account.iban,
      bic: account.bic,
      balance: account.balance,
      open: account.open,
      show: account.show,
    });

    if (error) {
      console.error("Error saving account:", error);
      return;
    }

    // Falls erfolgreich, wird die lokale Liste aktualisiert
    const index = accounts.value.findIndex((acc) => acc.id === account.id);
    if (index !== -1) {
      accounts.value[index] = account;
    } else {
      accounts.value.push(account);
    }
  };

  // Funktion zum Löschen eines Accounts
  const deleteAccount = async (id: number) => {
    const { error } = await supabase.from("accounts").delete().eq("id", id);

    if (error) {
      console.error("Error deleting account:", error);
      return;
    }

    accounts.value = accounts.value.filter((acc) => acc.id !== id);
  };

  return {
    accounts,
    fetchAccounts,
    saveAccount,
    deleteAccount,
  };
});
