import { useFormContext } from 'react-hook-form';

export const Mail = () => {

    const { register, formState: {errors}} = useFormContext();

  return (
    <>

        <label htmlFor='eMail'> eMail </label>

        <input id='eMail' type='email' placeholder='PerezPepito@mail.com' {...register("eMail", {

            required: {
            value: true,
            message: "eMail is required"
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "eMail wrong"
            }

        })} />

        { errors.eMail && <span>{errors.eMail.message?.toString()}</span> }

    </>
  )
}

export default Mail;