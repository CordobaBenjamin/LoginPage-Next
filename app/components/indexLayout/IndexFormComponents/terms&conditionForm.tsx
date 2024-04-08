import { useFormContext } from "react-hook-form";

const Terms = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="block m-2 mb-5">
      <div className="mb-5 ">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          tempora, necessitatibus, iure sequi odio repudiandae quas explicabo,
          est hic impedit labore temporibus optio natus quae voluptatum numquam
          dolor aliquid libero?
        </h2>
      </div>
      <label htmlFor="terms" className="block">
        {" "}
        Do you agree with our terms and conditions?{" "}
      </label>

      <input
        id="terms"
        type="checkbox"
        className="block w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
        {...register("terms", {
          required: true,
        })}
      />

      {errors.terms && (
        <span className="text-red-400">
          {" "}
          You must accept the terms and conditions{" "}
        </span>
      )}
    </div>
  );
};

export default Terms;
