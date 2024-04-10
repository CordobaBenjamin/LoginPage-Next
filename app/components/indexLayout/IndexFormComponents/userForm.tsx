import { useFormContext } from "react-hook-form";
import "../../global.css";

export const Username = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="block m-2 mb-5 max-w-min">
      <label htmlFor="userName" className="block">
        Username
      </label>

      <input
        id="name"
        type="text"
        placeholder="TheUltimatePepito"
        className="block border-b-2 border-gray-400 rounded bg-transparent"
        {...register("userName", {
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
            message:
              "The Username can only contain letters, remember that it is case sensitive.",
          },
        })}
      />

      {errors.userName && (
        <span className="text-red-400">
          {" "}
          {errors.userName.message?.toString()}{" "}
        </span>
      )}
    </div>
  );
};

export default Username;
