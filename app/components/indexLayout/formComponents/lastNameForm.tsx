import { useFormContext } from 'react-hook-form';

export const LastName = () => {

    const { register, formState: {errors} } = useFormContext();

    return (
      <div className='block m-2 mb-5'>
            <label htmlFor='lastName' className='block'> Last Name </label>

            <input id='lastName' type='text' placeholder='Perez' className='block border-b-2 border-gray-400 rounded bg-transparent' {...register("lastName", {
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

            { errors.lastName && <span className='text-red-400'>{errors.lastName.message?.toString()}</span> }

      </div>
    );
  };
  
  export default LastName;