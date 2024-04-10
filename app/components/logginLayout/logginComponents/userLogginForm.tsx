import { useFormContext } from "react-hook-form";
import "../../global.css";

export const UsernameLoggin = () => {
  const {register,formState: { errors }} = useFormContext();

  return (
    <div className="block m-2 mb-12 max-w-min mx-auto">
      <label htmlFor="Username" className="block text-2xl w-fit mx-auto">
        Username
      </label>

      <input
        id="Username"
        type="text"
        className="block border-b-2 border-gray-400 rounded bg-transparent text-3xl "
        {...register("Username", {
          required: {
            value: true,
            message: "User is required",
          },
          minLength: {
            value: 2,
            message: "The Username must be at least 3 characters or more",
          },
          maxLength: {
            value: 12,
            message: "The Username cannot be more than 12 characters.",
          },
          pattern: {
            value: /^[a-zA-Z]+$/, 
            message: "The Username can only contain letters, remember that it is case sensitive.",
          }, 
        })}
          
      />

      {errors.Username && (
        <span className="text-red-400">
          {" "}
          {errors.Username.message?.toString()}{" "}
        </span>
      )}
    </div>
  );
};

export default UsernameLoggin;
