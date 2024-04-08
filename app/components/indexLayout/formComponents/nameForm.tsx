import { useFormContext } from "react-hook-form";
import "../../global.css";

export const Name = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="block m-2 mb-5 max-w-min">
      <label htmlFor="name" className="block">
        Name
      </label>

      <input
        id="name"
        type="text"
        placeholder="Pepito"
        className="block border-b-2 border-gray-400 rounded bg-transparent"
        {...register("name", {
          required: {
            value: true,
            message: "Name is required",
          },
          minLength: {
            value: 2,
            message: "The name must be at least 3 characters or more",
          },
          maxLength: {
            value: 12,
            message: "Just your first name",
          },
        })}
      />

      {errors.name && (
        <span className="text-red-400">
          {" "}
          {errors.name.message?.toString()}{" "}
        </span>
      )}
    </div>
  );
};

export default Name;
