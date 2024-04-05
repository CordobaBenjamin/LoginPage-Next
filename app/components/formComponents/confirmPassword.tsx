import { useFormContext } from 'react-hook-form';

const ConfirmPassword = () => {

    const { register, formState: {errors}, watch } = useFormContext();

  return (
    <div className='block m-2 mb-5'>

        <label htmlFor='confirmPassword' className='block'> Confirm Password </label>

        <input id='confirmPassword' type='password' placeholder='*****' className='block border-b-2 border-gray-400 rounded' {...register("confirmPassword", {
            required: {value:true, message: "Confirm Password is Required" },
            validate: value => value === watch ('password') || 'Both passwords must be the same.'
        })} />

        { errors.confirmPassword && <span className='text-red-400'>{errors.confirmPassword.message?.toString()}</span> }

    </div>
  )
}

export default ConfirmPassword;
