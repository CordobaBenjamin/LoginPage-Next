'use client'

import { FormProvider, useForm } from 'react-hook-form';
import Password from '../formComponents/password';
import Mail from '../formComponents/eMailForm';

import Terms from '../formComponents/terms&condition';

const FormRoot = () => {
    const methods = useForm();

    const onSubmit = methods.handleSubmit((data) => {
        alert("Data Enviada: " + JSON.stringify(data));
    });

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-gray-300 to-green-100'> 
            <div className='h-3/4 w-2/5 p-4  mx-auto shadow-2xl bg-gray-100'> 

                <div className="text-center">
                    <h1 className="text-6xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-gray-300 bg-clip-text relative inline-block p-4">
                        <span id='first' className="text-black italic text-3xl md:text-3xl  inline-block">
                        Cordoba Market!
                        <span id='second' className="block text-6xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-gray-300 bg-clip-text">
                        Create Account
                        </span> </span>
                    </h1>
                </div>

                <div className='flex justify-center my-16'>
                    <FormProvider {...methods}>
                        <form onSubmit={onSubmit} id='root' className='' >

                            <Mail/>
                            <Password />
                            <Terms />

                            <div className='flex justify-center'>  
                            <button type='submit' className='border-2 px-2 shadow-xl rounded-md border-blue-400 flex hover:bg-blue-200 transition-all ease-in-out duration-500 hover:px-4'>
                                Aceptar
                            </button>
                            </div>

                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default FormRoot;

