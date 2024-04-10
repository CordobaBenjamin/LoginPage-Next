"use client";
import { FormProvider, useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import { User } from "../../indexLayout/first-step/formRoot";
import { decrypt_fn, encrypted_fn } from "../../accountDataBase/dataBase";
import UsernameLoggin from "../logginComponents/userLogginForm";

let logginUser: string = "";

const LogginLayout = () => {
  let AES_logginData: string;
  const methods = useForm();
  const router = useRouter();

  const onSubmitNext = methods.handleSubmit((data) => {
    logginUser = data.Username;
    let userFromLocalStorage = localStorage.getItem(logginUser);
    if (userFromLocalStorage !== null) {
      let decrypt_AES_logginUser = decrypt_fn(userFromLocalStorage);
      if (decrypt_AES_logginUser === data.Username) {
        router.push("/pages/loggin/second-step");
      } else {
        alert("No username found");
      }
    }
  });
  const buttonPrevious = () => {
    router.push("/pages/home");
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
                Loggin Account
              </span>{" "}
            </span>
          </h1>
          <h1 className="text-gray-600 text-2xl">
            {" "}
            Remember the upper and lower case in Username{" "}
          </h1>
          <h5 className="text-gray-600 text-xs">
            The data is end-to-end encrypted, and no worker will ask you for
            anything.
          </h5>
        </div>

        <div className="flex justify-center h-3/6 w-full mt-14">
          <FormProvider {...methods}>
            <form onSubmit={buttonNext} id="root" className="w-full">
              <UsernameLoggin />
              <div id="spanError"></div>

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
                  className="border-2 py-2 px-14 placeholder:shadow-xl rounded-md border-green-400 flex hover:bg-green-50 transition-all ease-in-out duration-500 hover:px-20"
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

export default LogginLayout;
export { logginUser };
