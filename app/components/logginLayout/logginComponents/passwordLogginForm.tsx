import { useFormContext } from "react-hook-form";

export const PasswordLoggin = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  return (
    <div className="flex mx-auto w-full">
      <div className="block m-2 mb-5 w-full">
        <label htmlFor="password" className="block text-xl">
          {" "}
          Password{" "}
        </label>

        <input
          id="password"
          type="password"
          placeholder="*****"
          className="w-full block border-b-2 border-gray-400 rounded bg-transparent text-2xl"
          {...register("password", {
            required: {
              value: true,
              message: "Password is Required",
            },

            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message:
                "Password must contain at least one lowercase letter, one uppercase letter, and one number",
            },
            minLength: {
              value: 5,
              message: "Your password must be at least 5 characters or more",
            },
            maxLength: {
              value: 25,
              message: "Your password cannot be more than 25 characters",
            },
          })}
        />

        {errors.password && (
          <span className="text-red-400">
            {errors.password.message?.toString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default PasswordLoggin;
