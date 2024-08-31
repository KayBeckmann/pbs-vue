import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import { ref } from "vue";
import { Account } from "@/models/account"; // Pfad zu deiner Account-Klasse

export const useAccountStore = defineStore("account", () => {
  const accounts = ref<Account[]>([]);

  // Funktion zum Abrufen der aktuellen Benutzer-ID
  const getCurrentUserId = async () => {
    const session = await supabase.auth.getSession();
    if (session.data.session) {
      return session.data.session.user.id;
    }
    throw new Error("No user is logged in");
  };

  // Funktion zum Laden der Daten von Supabase
  const fetchAccounts = async () => {
    try {
      // Hole die Benutzer-ID
      const userId = await getCurrentUserId();

      // Führe die Abfrage aus, um nur die Accounts des aktuellen Benutzers zu laden
      const { data, error } = await supabase
        .from("accounts")
        .select("*")
        .eq("owner", userId);

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
      // Hier kannst du die Daten weiterverarbeiten, z.B. im Store speichern
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Funktion zum Hinzufügen oder Aktualisieren eines Accounts
  const saveAccount = async (account: Account) => {
    try {
      const userId = await getCurrentUserId(); // Hole die aktuelle Benutzer-ID

      const { error } = await supabase.from("accounts").upsert({
        id: account.id,
        bank: account.bank,
        iban: account.iban,
        bic: account.bic,
        balance: account.balance,
        open: account.open,
        show: account.show,
        owner: userId, // Setze den Owner auf die aktuelle Benutzer-ID
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
    } catch (error) {
      console.error("Error:", error);
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

  // Funktion zum Zurücksetzen des Stores
  const reset = () => {
    accounts.value = [];
  };

  // Funktion für die Summe aller Konten
  const sum = () => {
    let total = 0;
    for (let i = 0; i < accounts.value.length; i++) {
      total += accounts.value[i].balance;
    }
    return total;
  };

  // Synchronisation mit Supabase abonnieren
  const subscribeToChanges = () => {
    supabase
      .from("accounts") // Tabellenname in Supabase
      .on("*", (payload) => {
        console.log("Change received!", payload);

        if (payload.eventType === "INSERT" || payload.eventType === "UPDATE") {
          const account = new Account(
            payload.new.id,
            payload.new.bank,
            payload.new.iban,
            payload.new.bic,
            payload.new.balance,
            payload.new.open,
            payload.new.show
          );
          saveAccount(account);
        } else if (payload.eventType === "DELETE") {
          deleteAccount(payload.old.id);
        }
      })
      .subscribe();
  };

  return {
    accounts,
    fetchAccounts,
    saveAccount,
    deleteAccount,
    reset,
    sum,
    subscribeToChanges,
  };
});
