"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Name from "../formComponents/nameForm";
import LastName from "../formComponents/lastNameForm";
import Birthdate from "../formComponents/birthdateForm";
import Country from "../formComponents/country";
import { addOrUpdateAccounts } from "../../accountDataBase/dataBase";

const FirstStep = () => {
  let User: string;
  const router = useRouter();
  const methods = useForm();

  const onSubmitNext = methods.handleSubmit((data) => {
    console.log("Form data:", data);
    User = data.name;
    addOrUpdateAccounts(User, data);
    localStorage.setItem("User", User);
    router.push("./second-step");
  });

  const buttonPrevious = () => {
    router.push("../home");
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
              <div className="flex mx-auto">
                <Name />
                <LastName />
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

export default FirstStep;
// export {User};
