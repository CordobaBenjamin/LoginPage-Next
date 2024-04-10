"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Terms from "../IndexFormComponents/terms&conditionForm";
import { AccountDataBase, encrypted_fn } from "../../accountDataBase/dataBase";

const ThirdStep = () => {
  let userFromLocalStorage = localStorage.getItem("User");
  const methods = useForm();
  const router = useRouter();
  const buttonToReplace = useRef<HTMLButtonElement>(null);

  const onSubmitNext = methods.handleSubmit((data) => {
    console.log("Form data:", data);

    if (data.terms === true) {
      if (userFromLocalStorage !== null) {
        let AccountCreated = AccountDataBase[userFromLocalStorage];
        const jsonAccountDate = JSON.stringify(AccountCreated);
        let encrypted_jsonAccountDate = encrypted_fn(jsonAccountDate);
        localStorage.setItem(userFromLocalStorage, encrypted_jsonAccountDate);
      }
    }

    alert("Your account has been created. Thanks for trusting");
    //! Cambia el boton "Last Step" por uno "Home"
    const buttonChange = buttonToReplace.current;
    const newButtonHome = document.createElement("button");
    newButtonHome.className =
      "border-2 px-2 shadow-xl rounded-md border-green-400 flex hover:bg-green-50 transition-all ease-in-out duration-500 hover:px-4";
    newButtonHome.onclick = buttonHome;
    newButtonHome.innerText = "Home";
    newButtonHome.type = "button";
    buttonChange?.parentNode?.replaceChild(newButtonHome, buttonChange);
  });

  const buttonPrevious = () => {
    router.push("./second-step");
  };
  const buttonHome = () => {
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
              <Terms />

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
                  ref={buttonToReplace}
                  type="button"
                  onClick={buttonPrevious}
                  className="border-2 px-2 shadow-xl rounded-md border-green-400 flex hover:bg-green-50 transition-all ease-in-out duration-500 hover:px-4"
                  id="homeOrlast_button"
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

export default ThirdStep;
