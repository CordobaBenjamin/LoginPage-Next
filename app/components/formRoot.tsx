'use client'

import { FormProvider, useForm } from 'react-hook-form';
import Birthdate from './formComponents/birthdateForm';
import ConfirmPassword from './formComponents/confirmPassword';
import Password from './formComponents/password';
import Mail from './formComponents/eMailForm';
import Name from './formComponents/nameForm';
import LastName from './formComponents/lastNameForm';
import Country from './formComponents/country';
import Terms from './formComponents/terms&condition';

const FormRoot = () => {
    const methods = useForm();

    const onSubmit = methods.handleSubmit((data) => {
        alert("Data Enviada: " + JSON.stringify(data));
    });

    return (
        <div className='flex justify-center items-center h-screen'> 
            <div className='h-3/4 w-2/5 p-4  mx-auto shadow-2xl'> 
                <FormProvider {...methods}>
                    <form onSubmit={onSubmit} id='root' >

                        <div className='flex mx-auto'>  
                            <Name />
                            <LastName />
                        </div> 

                        <Mail />
                        <Password />
                        <ConfirmPassword />
                        <Birthdate />
                        <Country />
                        <Terms />

                        <button type='submit'>
                            Aceptar
                        </button>

                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

export default FormRoot;

