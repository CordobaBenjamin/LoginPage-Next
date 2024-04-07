import { useFormContext } from 'react-hook-form';


export const Password  = () => {

    const { register, handleSubmit, formState: {errors}, watch } = useFormContext();
    return (

    <div className='flex mx-auto'>  

            <div className='block m-2 mb-5 max-w-min'>
                
                    <label htmlFor='password' className='block'> Password </label>

                    <input id='password' type='password' placeholder='*****' className='block border-b-2 border-gray-400 rounded bg-transparent' {...register("password", {
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

            <div className='block m-2 mb-5 max-w-min '>

                <label htmlFor='confirmPassword' className='block'> Confirm Password </label>

                    <div className='max-w-fit'>
                        <input id='confirmPassword' type='password' placeholder='*****' className='block border-b-2 border-gray-400 rounded bg-transparent' {...register("confirmPassword", {
                            required: {value:true, message: "Confirm Password is Required" },
                            validate: value => value === watch ('password') || 'Both passwords must be the same.'
                        })} />

                        { errors.confirmPassword && <span className='text-red-400'>{errors.confirmPassword.message?.toString()}</span> }
                    </div>

            </div>

    </div>
    )
  }
  
  export default Password