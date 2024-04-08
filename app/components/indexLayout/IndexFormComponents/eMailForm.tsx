import { useFormContext } from "react-hook-form";

export const Mail = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="block m-2 mb-5">
      <label htmlFor="eMail" className="block">
        {" "}
        eMail Adress{" "}
      </label>
      <div>
        <input
          id="eMail"
          type="email"
          placeholder="PerezPepito@mail.com"
          className="w-full block border-b-2 border-gray-400 rounded bg-transparent"
          {...register("eMail", {
            required: {
              value: true,
              message: "eMail is required",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "eMail wrong",
            },
          })}
        />

        {errors.eMail && (
          <span className="text-red-400">
            {errors.eMail.message?.toString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default Mail;
