import { useFormContext } from 'react-hook-form';

export const Birthdate  = () => {

    const { register,  formState: {errors}, } = useFormContext();

    return (
      <div className='block m-2 mb-5'>
        <label htmlFor='birthdate' className='block'> Birthdate </label>

        <input id='birthdate' type='date' className='block border-b-2 border-gray-400 rounded' {...register("birthdate", {
            required: { value:true, message: "Birthday is Required" }, 
            validate: (value) => {
                    const birthday = new Date(value);
                    const actuallyDate = new Date();
                    const age = actuallyDate.getFullYear() - birthday.getFullYear();
                
                    if (age > 17) { return true } else { return "You need to be older than 18 years " };  
            },})} />

        {errors.birthdate && <span className='text-red-400'>{errors.birthdate.message?.toString()}</span>}

      </div>
    );
  };
  
  export default Birthdate;