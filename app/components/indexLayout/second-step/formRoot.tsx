"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  addOrUpdateAccounts,
  encrypted_fn,
} from "../../accountDataBase/dataBase";
import { User } from "../first-step/formRoot";
import Password from "../IndexFormComponents/passwordForm";
import Mail from "../IndexFormComponents/eMailForm";

console.log(User);

const SecondStep = () => {
  let userFromLocalStorage = localStorage.getItem(User);
  let AES6: string;
  let AES7: string;
  const methods = useForm();
  const router = useRouter();

  const onSubmitNext = methods.handleSubmit((data) => {
    console.log("Form data:", data);
    AES6 = encrypted_fn(data.eMail);
    AES7 = encrypted_fn(data.password);
    let AES_data: any = { AES6, AES7 };
    if (userFromLocalStorage !== null) {
      addOrUpdateAccounts(userFromLocalStorage, AES_data);
    }
    router.push("./third-step");
  });

  const buttonPrevious = () => {
    router.push("./first-step");
  };
  const buttonNext = () => {
    onSubmitNext();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-green-200 animate-gradient-move">
      <div className="h-3/4 w-2/5 p-4  mx-auto shadow-2xl shadow-blue-200 bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text relative inline-block p-4">
            <span
              id="first"
              className="text-black italic text-3xl md:text-3xl  inline-block"
            >
              Cordoba Market!
              <span
                id="second"
                className="block text-6xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text"
              >
                Create Account
              </span>{" "}
            </span>
          </h1>
          <h1 className="text-gray-600 text-2xl">
            {" "}
            Please complete the spaces with your information{" "}
          </h1>
          <h5 className="text-gray-600 text-xs">
            The data is end-to-end encrypted, and no worker will ask you for
            anything.
          </h5>
        </div>

        <div className="flex justify-center my-16">
          <FormProvider {...methods}>
            <form onSubmit={buttonNext} id="root" className="">
              <Mail />
              <Password />

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={buttonNext}
                  className="border-2 px-2 shadow-xl rounded-md border-green-400 flex hover:bg-green-50 transition-all ease-in-out duration-500 hover:px-4 mb-4"
                >
                  Next Step
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={buttonPrevious}
                  className="border-2 px-2 shadow-xl rounded-md border-green-400 flex hover:bg-green-50 transition-all ease-in-out duration-500 hover:px-4"
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

export default SecondStep;
