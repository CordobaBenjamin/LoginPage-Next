import { useFormContext } from 'react-hook-form';

const ConfirmPassword = () => {

    const { register, formState: {errors}, watch } = useFormContext();

  return (
    <>

        <label htmlFor='confirmPassword'> Confirm Password </label>

        <input id='confirmPassword' type='password' placeholder='*****' {...register("confirmPassword", {
            required: {value:true, message: "Confirm Password is Required" },
            validate: value => value === watch ('password') || 'Both passwords must be the same.'
        })} />

        { errors.confirmPassword && <span>{errors.confirmPassword.message?.toString()}</span> }

    </>
  )
}

export default ConfirmPassword;
