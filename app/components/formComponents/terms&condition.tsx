import { useFormContext } from 'react-hook-form';

const Terms = () => {

    const { register, formState: {errors},  } = useFormContext();

  return (
    <div className='block m-2 mb-5'>
        <label htmlFor='terms' className='block'> Terms and Conditions </label>

        <input id='terms' type='checkbox' className='block border-b-2 border-gray-400 rounded' {...register("terms", {
            required: true,
        })} />

        { errors.terms && <span className='text-red-400'> You must accept the terms and conditions </span> }
    </div>
);};

export default Terms;