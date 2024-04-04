import { useFormContext } from 'react-hook-form';
import { useForm } from 'react-hook-form';

export const Name = () => {


    const { register, formState: {errors}, watch } = useFormContext();

    return (
      <>
            <label htmlFor='name'> Name </label>

            <input id='name' type='text' placeholder='Pepito' {...register("name", {
                required: {
                    value: true,
                    message: "Name is required"
                },
                minLength: {
                    value: 2,
                    message: "The name must be at least 3 characters or more"
                },

                maxLength: {
                    value: 12,
                    message: "Just put the first name",
                },
                
            })} />

            
    

            {errors.name && <span> {errors.name.message?.toString()} </span> }

      </>
    )
  }
  
  export default Name;