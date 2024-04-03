'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const Hooks = () => {

    const { register, handleSubmit, formState } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log("Formulario Enviado");
        console.log(data)});

    return (
        <>
            <form onSubmit={onSubmit}
            >
                {/* Name */}
                <label htmlFor='name'>
                    Name
                </label>
                <input type='text' {...register("name", {
                    required: true,

                })} />

                {/* eMail */}
                <label htmlFor='eMail'>
                    eMail
                </label>
                <input type='text' {...register("eMail")} />

                {/* Password */}
                <label htmlFor='password'>
                    Password
                </label>
                <input type='password' {...register("password")} />

                {/* Confirm Password */}
                <label htmlFor='confirmPassword'>
                    Confirm Password
                </label>
                <input type='password' {...register("confirmPassword")} />

                {/* Birthdate */}
                <label htmlFor='birthdate'>
                    Birthdate
                </label>
                <input type='date' {...register("birthdate")} />

                {/* Country */}
                <label htmlFor='country'>
                    Country
                </label>
                <select {...register("country")}>
                    <option value="mx">
                        Mexico
                    </option>
                    <option value="ar">
                        Argentina
                    </option>
                    <option value="co">
                        Colombia
                    </option>
                    <option value="cl">
                        Chile
                    </option>
                    <option value="eu">
                        Estados Unidos
                    </option>
                </select>

                {/* Terms and Conditions */}
                <label htmlFor='Terms'>
                    Terms and Conditions
                </label>
                <input type='checkbox' {...register("Terms")} />

                <button type='submit'>
                    Aceptar
                </button>
            </form>
        </>
    );
}

export default Hooks;
