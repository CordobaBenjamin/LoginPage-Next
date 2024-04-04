import { useFormContext } from 'react-hook-form';

const Terms = () => {

    const { register, formState: {errors},  } = useFormContext();

  return (
    <>
        <label htmlFor='terms'> Terms and Conditions </label>

        <input id='terms' type='checkbox' {...register("terms", {
            required: true,
        })} />

        { errors.terms && <span> You must accept the terms and conditions </span> }
    </>
);};

export default Terms;