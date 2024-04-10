"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { encrypted_fn } from "../../accountDataBase/dataBase";
import { addOrUpdateAccounts } from "../../accountDataBase/dataBase";
import Username from "../IndexFormComponents/userForm";
import FullName from "../IndexFormComponents/FullNameForm";
import Birthdate from "../IndexFormComponents/birthdateForm";
import Country from "../IndexFormComponents/countryForm";

let User: string = "";

const FirstStep = () => {
  let AES1: string;
  let AES2: string;
  let AES3: string;
  let AES4: string;
  let AES5: string;

  const router = useRouter();
  const methods = useForm();

  const onSubmitNext = methods.handleSubmit((data) => {
    User = data.userName;
    AES1 = encrypted_fn(data.userName);
    AES2 = encrypted_fn(data.fullName);
    AES3 = encrypted_fn(data.birthdate);
    AES4 = encrypted_fn(data.country);
    AES5 = encrypted_fn(data.province);
    let AES_data: any = { AES1, AES2, AES3, AES4, AES5 };

    addOrUpdateAccounts(AES1, AES_data);
    localStorage.setItem(User, AES1);
    router.push("./second-step");
  });

  const buttonPrevious = () => {
    router.push("../home");
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
          <h5 className="text-gray-600 text-xs">
            Except for your username, which is public and any user can see it.
          </h5>
        </div>

        <div className="flex justify-center my-16">
          <FormProvider {...methods}>
            <form onSubmit={buttonNext} id="root" className="">
              <div className="flex mx-auto">
                <Username />
                <FullName />
              </div>

              <Birthdate />
              <Country />

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
                  Home
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
export { User };
