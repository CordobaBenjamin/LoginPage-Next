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
        <FormProvider {...methods}>
            <form onSubmit={onSubmit} id='root' className='justify-center justify-items-start'>
                <Name />
                <LastName />
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
    );
};

export default FormRoot;

