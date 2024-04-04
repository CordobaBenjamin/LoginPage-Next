'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
    name: string;
    eMail: string;
    password: string;
    confirmPassword: string;
    birthdate: string;
    country: string;
    terms: boolean;
  }

const Hooks = () => {

    const { register, handleSubmit, formState: {errors}, watch }=  

        useForm();
        const onSubmit = handleSubmit((data) => {});
    

    return (
        <>
            <form onSubmit={onSubmit}>

                {/* Name */}
                <label htmlFor='name'>
                    Name
                </label>
                <input type='text' {...register("name", {
                    required: {
                        value: true,
                        message: "Name is required"
                    },
                    minLength: {
                        value: 2,
                        message: "The name must be at least 3 characters or more"
                    },

                    maxLength: {
                        value: 12,
                        message: "Just put the first name",
                    },
                })} />
                {
                    errors.name && <span>{errors.name.message}</span>
                }
                
                {/*Last Name */}
                <label htmlFor='lastName'>
                    Last Name
                </label>
                <input type='text' {...register("lastName", {
                    required: {
                        value: true,
                        message: " Last Name is required"
                    },
                    minLength: {
                        value: 2,
                        message: "The Last Name must be at least 3 characters or more"
                    },

                    maxLength: {
                        value: 12,
                        message: "Just put the Last name",
                    },
                })} />
                {
                    errors.lastName && <span>{errors.lastName.message}</span>
                }

                {/* eMail */}

                <label htmlFor='eMail'>
                    eMail
                </label>
                <input type='email' {...register("eMail", {

                    required: {
                       value: true,
                       message: "eMail is required"
                    },

                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/,
                        message: "eMail wrong"
                    }

                 })} />
                {
                    errors.eMail && <span>eMail Required</span>
                }

                {/* Password */}
                <label htmlFor='password'>
                    Password
                </label>
                <input type='password' {...register("password", {
                    required: {
                    value:true,
                    message: "Password is Required"
                    },
                    minLength: {
                        value: 5,
                        message: "Your password must be at least 5 characters or more"
                    },
                    maxLength: {
                        value: 25,
                        message: "Your password cannot be more than 25 characters"
                    }
                 })} />
                {
                    errors.password && <span>{errors.password.message}</span>
                }

                {/* Confirm Password */}
                <label htmlFor='confirmPassword'>
                    Confirm Password
                </label>
                <input type='password' {...register("confirmPassword", {
                      required: {
                        value:true,
                        message: "Password is Required"
                        },
                        minLength: {
                            value: 5,
                            message: "Your password must be at least 5 characters or more"
                        },
                        maxLength: {
                            value: 25,
                            message: "Your password cannot be more than 25 characters"
                        }
                 })} />
                {
                    errors.confirmPassword && <span>Password Required</span>
                }

                {/* Birthdate */}
                <label htmlFor='birthdate'>
                    Birthdate
                </label>
                <input type='date' {...register("birthdate", {
                    required: {
                        value:true,
                        message: "Birthday is Required"
                    }, 
                    validate: (value) => {
                            const birthday = new Date(value);
                            const actuallyDate = new Date();
                            const age = actuallyDate.getFullYear() - birthday.getFullYear();
                        
                            if (age > 17) {
                                return true
                            } else {
                                return "You need to be older than 18 years "
                            };  
                    },
                 })} />
                {
                    errors.birthdate && <span>{errors.birthdate.message}</span>
                }
               

                {/* Country */}
                <label htmlFor='country'>
                    Country
                </label>
                <select {...register("country", {
                    required: true,
                 })}>
                {
                    errors.country && <span>Country Required</span>
                }
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
                <label htmlFor='terms'>
                    Terms and Conditions
                </label>
                <input type='checkbox' {...register("terms", {
                    required: true,
                 })} />
                {
                    errors.terms && <span>Terms and Conditions is required</span>
                }

                <button type='submit'>
                    Aceptar
                </button>

                <pre>
                    {JSON.stringify(watch(), null, 2)}
                </pre>

            </form>
        </>
    );
}

export default Hooks;
