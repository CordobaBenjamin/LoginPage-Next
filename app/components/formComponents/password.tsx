import { useForm } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';


export const Password  = () => {

    const { register, handleSubmit, formState: {errors}, watch } = useFormContext();
    return (
      <div className='block m-2 mb-5'>
            <label htmlFor='password' className='block'> Password </label>

            <input id='password' type='password' placeholder='*****' className='block border-b-2 border-gray-400 rounded' {...register("password", {
                required: {
                    value:true,
                    message: "Password is Required"
                },

                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: "Password must contain at least one lowercase letter, one uppercase letter, and one number"
                } 
                ,
                minLength: {
                    value: 5,
                    message: "Your password must be at least 5 characters or more"
                },
                maxLength: {
                    value: 25,
                    message: "Your password cannot be more than 25 characters"
                }
            })} />

            { errors.password && <span className='text-red-400'>{errors.password.message?.toString()}</span> }
      </div>
    )
  }
  
  export default Password