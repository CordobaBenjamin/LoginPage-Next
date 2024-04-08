import React from "react";
import FirstStep from "../indexLayout/first-step/formRoot";
import SecondStep from "../indexLayout/second-step/formRoot";
import ThirdStep from "../indexLayout/third-step/formRoot";
import LastName from "../indexLayout/formComponents/lastNameForm";
import Name from "../indexLayout/formComponents/nameForm";

interface Accounts {
  name?: string;
  lastName?: string;
  country?: string;
  province?: string;
  eMail?: string;
  password?: number;
  confirmPassword?: number;
  birthdate?: number;
}

let AccountDataBase: Record<string, Accounts> = {};

// Esta función ahora es exportada y puede ser llamada directamente con los datos de la cuenta.
export const addOrUpdateAccounts = (accountName: string, data: Accounts) => {
  if (AccountDataBase[accountName]) {
    // Actualiza la cuenta existente con nueva información.
    AccountDataBase[accountName] = { ...AccountDataBase[accountName], ...data };
  } else {
    // Crea una nueva cuenta si no existe.
    AccountDataBase[accountName] = data;
  }

  // Puedes quitar este console.log o dejarlo para propósitos de depuración.
  console.log(AccountDataBase);
};

// No necesitas exportar DataBase a menos que tenga una funcionalidad adicional que no esté cubierta.
export { AccountDataBase };
