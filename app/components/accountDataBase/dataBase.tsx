import React from "react";
import crypto from "crypto";
var CryptoJS = require("crypto-js");
const fs = require("fs");

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

//! Función para generar una clave secreta de 16 bytes (128 bits) de manera segura
function generateSecretKey(): Buffer {
  return crypto.randomBytes(16);
}
//! Forma de ver la clave generada
// console.log('Clave secreta generada (segura):', keyCreated.toString('hex'));

//! La clave creada se guarda en '.env.local' y de esta forma es traida bajo el nombre secretKey.
const secretKey = "130179cb6220f209656ad620fcd5003";

//! Funcion que recibe el parametro data y lo encripta en sistema AES con la key 16 bits.
export const encrypted_fn = (data: string) => {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
};
//! Funcion que recibre el parametro encriptado y lo desencripta en string.
export const decrypt_fn = (encrypted: string): string => {
  const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

let AccountDataBase: Record<string, Accounts> = {};

//!  Esta función ahora es exportada y puede ser llamada directamente con los datos de la cuenta.
export const addOrUpdateAccounts = (accountName: string, data: Accounts) => {
  if (AccountDataBase[accountName]) {
    // Actualiza la cuenta existente con nueva información.
    AccountDataBase[accountName] = { ...AccountDataBase[accountName], ...data };
  } else {
    // Crea una nueva cuenta si no existe.
    AccountDataBase[accountName] = data;
  }
};

// No necesitas exportar DataBase a menos que tenga una funcionalidad adicional que no esté cubierta.
export { AccountDataBase };
