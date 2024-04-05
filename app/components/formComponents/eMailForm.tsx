import { useFormContext } from 'react-hook-form';

export const Mail = () => {

    const { register, formState: {errors}} = useFormContext();

  return (
    <div className='block m-2 mb-5'>

        <label htmlFor='eMail' className='block'> eMail </label>

        <input id='eMail' type='email' placeholder='PerezPepito@mail.com'  className='w-2/5 block border-b-2 border-gray-400 rounded' {...register("eMail", {

            required: {
            value: true,
            message: "eMail is required"
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "eMail wrong"
            }

        })} />

        { errors.eMail && <span className='text-red-400'>{errors.eMail.message?.toString()}</span> }

    </div>
  )
}

export default Mail;