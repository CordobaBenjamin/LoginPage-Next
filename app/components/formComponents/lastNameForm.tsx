import { useFormContext } from 'react-hook-form';

export const LastName = () => {

    const { register, formState: {errors} } = useFormContext();

    return (
      <>
            <label htmlFor='lastName'> Last Name </label>

            <input id='lastName' type='text' placeholder='Perez' {...register("lastName", {
                required: {
                    value: true,
                    message: " Last Name is required"
                },
                minLength: {
                    value: 2,
                    message: "The Last Name must be at least 3 characters or more"
                },

                maxLength: {
                    value: 12,
                    message: "Just put the Last name",
                },
            })} />

            { errors.lastName && <span>{errors.lastName.message?.toString()}</span> }

      </>
    );
  };
  
  export default LastName;