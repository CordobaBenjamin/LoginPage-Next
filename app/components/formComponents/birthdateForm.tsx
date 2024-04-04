import { useFormContext } from 'react-hook-form';

export const Birthdate  = () => {

    const { register,  formState: {errors}, } = useFormContext();

    return (
      <>
        <label htmlFor='birthdate'> Birthdate </label>

        <input id='birthdate' type='date' {...register("birthdate", {
            required: { value:true, message: "Birthday is Required" }, 
            validate: (value) => {
                    const birthday = new Date(value);
                    const actuallyDate = new Date();
                    const age = actuallyDate.getFullYear() - birthday.getFullYear();
                
                    if (age > 17) { return true } else { return "You need to be older than 18 years " };  
            },})} />

        {errors.birthdate && <span>{errors.birthdate.message?.toString()}</span>}

      </>
    );
  };
  
  export default Birthdate;