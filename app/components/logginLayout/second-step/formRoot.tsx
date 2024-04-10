"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MailLoggin from "../logginComponents/eMailLogginForm";
import PasswordLoggin from "../logginComponents/passwordLogginForm";
import { decrypt_fn } from "../../accountDataBase/dataBase";

const LogginLayout = () => {
  const methods = useForm();
  const router = useRouter();

  const [verifyCounter, setVerifyCounter] = useState<number>(0);

  const onSubmitNext = methods.handleSubmit((data) => {
    let userFromLocalStorage = localStorage.getItem("User");

    let userObjectFromLocalStorage = localStorage.getItem(
      `${userFromLocalStorage}`
    );

    if (userObjectFromLocalStorage !== null) {
      let decrypt_AES_logginData = decrypt_fn(userObjectFromLocalStorage);
      const logginData = JSON.parse(decrypt_AES_logginData);
      const { AES6, AES7 } = logginData;

      let decrypt_AES6_logginData = decrypt_fn(AES6);
      let decrypt_AES7_logginData = decrypt_fn(AES7);

      console.log(AES7);
      console.log(decrypt_AES7_logginData);

      console.log("Correct", verifyCounter);

      if (data.eMail == decrypt_AES6_logginData) {
        setVerifyCounter((verifyCounter) => verifyCounter + 1);
        console.log("eMailCorrect", verifyCounter);
      } else {
        setVerifyCounter((verifyCounter) => verifyCounter - 1);
        console.log("eMailWrong", verifyCounter);
        alert("eMail Wrong");
      }

      if (data.password == decrypt_AES7_logginData) {
        setVerifyCounter((verifyCounter) => verifyCounter + 1);
        console.log("PasswordCorrect", verifyCounter);
      } else {
        setVerifyCounter((verifyCounter) => verifyCounter - 1);
        console.log("PasswordWrong", verifyCounter);
        alert("Password Wrong");
      }

      if (verifyCounter === 2) {
        alert("Account has been create sucesfully");
        console.log("CorrectVerify", verifyCounter);
      }
    }

  });

  const buttonPrevious = () => {
    router.push("/pages/loggin/first-step");
  };

  const buttonNext = () => {
    onSubmitNext();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-300 to-green-100">
      <div className="h-3/4 w-2/5 p-4  mx-auto shadow-2xl bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-gray-300 bg-clip-text relative inline-block p-4">
            <span
              id="first"
              className="text-black italic text-3xl md:text-3xl  inline-block"
            >
              Cordoba Market!
              <span
                id="second"
                className="block text-6xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-gray-300 bg-clip-text"
              >
                Loggin Account
              </span>{" "}
            </span>
          </h1>
          <h1 className="text-gray-600 text-2xl">
            {" "}
            If you can't log in click below{" "}
          </h1>
          <h5 className="text-gray-600 text-xs">
            The data is end-to-end encrypted, and no worker will ask you for
            anything.
          </h5>
        </div>

        <div className="flex justify-center h-3/6 w-full mt-14">
          <FormProvider {...methods}>
            <form onSubmit={buttonNext} id="root" className="w-full">
              <div className="w-1/2 mx-auto">
                <MailLoggin />
                <PasswordLoggin />
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={buttonNext}
                  className="border-2 py-2 px-6 shadow-xl mb-6 rounded-md border-green-400 flex hover:bg-green-50 transition-all ease-in-out duration-500 hover:px-12"
                >
                  Loggin Account
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={buttonPrevious}
                  className="border-2 py-2 px-12 placeholder:shadow-xl rounded-md border-green-400 flex hover:bg-green-50 transition-all ease-in-out duration-500 hover:px-16"
                >
                  Last Step
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default LogginLayout;
