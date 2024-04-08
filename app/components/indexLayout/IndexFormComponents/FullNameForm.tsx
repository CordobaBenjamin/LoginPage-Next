import { useFormContext } from "react-hook-form";

export const FullName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="block m-2 mb-5 max-w-min">
      <label htmlFor="fullName" className="block">
        Full Name
      </label>

      <input
        id="fullName"
        type="text"
        placeholder="Perez"
        className="block border-b-2 border-gray-400 rounded bg-transparent"
        {...register("fullName", {
          required: {
            value: true,
            message: "Name is required",
          },
          minLength: {
            value: 5,
            message: "You need to put your First and Last name",
          },
          maxLength: {
            value: 20,
            message: "Just your First and Last name, Don't use nicknames or middle names",
          },
        })}
      />

      {errors.fullName && (
        <span className="text-red-400">
          {errors.fullName.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default FullName;
