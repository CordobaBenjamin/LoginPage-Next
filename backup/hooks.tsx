// 'use client'
// import React from 'react';
// import { useForm } from 'react-hook-form';

// interface FormValues {
//     name: string;
//     eMail: string;
//     password: string;
//     confirmPassword: string;
//     birthdate: string;
//     country: string;
//     terms: boolean;
//   }

// const Hooks = () => {

//     const { register, handleSubmit, formState: {errors}, watch }=  

//         useForm();
//         const onSubmit = handleSubmit((data) => {
//             alert("Data Enviada");
            
//         });
    

//     return (
//         <>
//             <form onSubmit={onSubmit}>

//               {/* //! NAME */}

//                 <label htmlFor='name'> Name </label>

//                 <input type='text' placeholder='Pepito' {...register("name", {
//                     required: {
//                         value: true,
//                         message: "Name is required"
//                     },
//                     minLength: {
//                         value: 2,
//                         message: "The name must be at least 3 characters or more"
//                     },

//                     maxLength: {
//                         value: 12,
//                         message: "Just put the first name",
//                     },
//                 })} />

//                 { errors.name && <span>{errors.name.message?.toString()}</span> }
                
//                {/* //! LAST NAME */}

//                 <label htmlFor='lastName'> Last Name </label>

//                 <input type='text' placeholder='Perez' {...register("lastName", {
//                     required: {
//                         value: true,
//                         message: " Last Name is required"
//                     },
//                     minLength: {
//                         value: 2,
//                         message: "The Last Name must be at least 3 characters or more"
//                     },

//                     maxLength: {
//                         value: 12,
//                         message: "Just put the Last name",
//                     },
//                 })} />
                
//                 { errors.lastName && <span>{errors.lastName.message?.toString()}</span> }

//             {/* //! eMail */}

//                 <label htmlFor='eMail'> eMail </label>

//                 <input type='email' placeholder='PerezPepito@mail.com' {...register("eMail", {

//                     required: {
//                        value: true,
//                        message: "eMail is required"
//                     },
//                     pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                         message: "eMail wrong"
//                     }

//                  })} />

//                 { errors.eMail && <span>eMail Required</span> }

//                 {/* //! PASSWORD */}

//                 <label htmlFor='password'> Password </label>

//                 <input type='password' placeholder='*****' {...register("password", {
//                     required: {
//                         value:true,
//                         message: "Password is Required"
//                     },

//                     pattern: {
//                         value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
//                         message: "Password must contain at least one lowercase letter, one uppercase letter, and one number"
//                     } 
//                     ,
//                     minLength: {
//                         value: 5,
//                         message: "Your password must be at least 5 characters or more"
//                     },
//                     maxLength: {
//                         value: 25,
//                         message: "Your password cannot be more than 25 characters"
//                     }
//                  })} />

//                 { errors.password && <span>{errors.password.message?.toString()}</span> }

//                 {/* //! CONFIRM PASSWORD */}

//                 <label htmlFor='confirmPassword'> Confirm Password </label>

//                 <input type='password' placeholder='*****' {...register("confirmPassword", {
//                     required: {value:true, message: "Confirm Password is Required" },
//                     validate: value => value === watch ('password') || 'Both passwords must be the same.'
//                  })} />

//                 { errors.confirmPassword && <span>{errors.confirmPassword.message?.toString()}</span> }

//                 {/* //! BIRTHDATE */}

//                 <label htmlFor='birthdate'> Birthdate </label>

//                 <input type='date' {...register("birthdate", {
//                     required: { value:true, message: "Birthday is Required" }, 
//                     validate: (value) => {
//                             const birthday = new Date(value);
//                             const actuallyDate = new Date();
//                             const age = actuallyDate.getFullYear() - birthday.getFullYear();
                        
//                             if (age > 17) { return true } else { return "You need to be older than 18 years " };  
//                     },})} />

//                 {errors.birthdate && <span>{errors.birthdate.message?.toString()}</span>}
               

//                 {/* //! COUNTRYS FORM */}
//                 <label htmlFor='country'> Country </label>

//                 <select {...register("country", {required: true, })}>

//                     { errors.country && <span>Country Required</span> }

//                                 <option value="es"> Spain </option>
//                                 <option value="eeuu"> United State </option>
//                                 <option value="ar"> Argentine </option>
//                                 <option value="mx"> Mexico </option>
//                                 <option value="jpn"> Japan </option>
//                                 <option value="oth"> Other </option>
                                
//                 </select>

//                 {
//                     watch('country') === 'oth' && (
//                 <>
//                        <input type='Text' placeholder='Put your country and State/Province.'/> 

//                 </>)},

//                     {/* //! UNITED STATE FORM */}

//                         {
//                             watch('country') === 'eeuu' && (
//                         <>
//                             <label htmlFor='state'> State </label>

//                             <select {...register("state", { required: true, })}>

//                                 { errors.country && <span>State Required</span> }

//                                     <option value="ca"> California </option>
//                                     <option value="de"> Delawere </option>
//                                     <option value="hi"> Hawai </option>
//                                     <option value="ny"> New York </option>
//                                     <option value="mn"> Minnesota </option>

//                             </select>
//                         </>)},

//                     {/* //! MEXICO FORM */}

//                         {
//                             watch('country') === 'mx' && (
//                         <>
//                             <label htmlFor='state'> State </label>

//                             <select {...register("state", { required: true, })}>

//                                 { errors.country && <span>State Required</span> }
                                
//                                     <option value="cdmx"> Ciudad de Mexico </option>
//                                     <option value="nl"> Nueva Leon </option>
//                                     <option value="yn"> Yucatan </option>
//                                     <option value="cc"> Campeche </option>
//                                     <option value="oc"> Oaxaca </option>

//                             </select>
//                         </>)},

//                     {/* //! ARGENTINE FORM */}

//                         {
//                             watch('country') === 'ar' && (
//                         <>
//                             <label htmlFor='province'> Province </label>

//                             <select {...register("province", { required: true, })}>

//                                 { errors.country && <span>Province Required</span> }

//                                     <option value="ba"> Buenos Aires </option>
//                                     <option value="sf"> Santa Fe </option>
//                                     <option value="cba"> Cordoba </option>
//                                     <option value="lr"> La Rioja </option>
//                                     <option value="jjy"> Jujuy </option>

//                             </select>
//                         </>)},

//                     {/* //! JAPAN FORM */}

//                         {
//                             watch('country') === 'jpn' && (
//                         <>
//                             <label htmlFor='district'> District </label>

//                             <select {...register("district", { required: true, })}>

//                                 { errors.country && <span>District Required</span> }

//                                     <option value="jpn-os"> 大阪府 (Osaka) </option>
//                                     <option value="jpn-to"> 東京都 (Tokio) </option>
//                                     <option value="jpn-na"> 長野県 (Nagano) </option>
//                                     <option value="jpn-ka"> 香川県 (Kanagawa) </option>
//                                     <option value="jpn-sh"> 滋賀県	(Shiga) </option>

//                             </select>
//                         </>)},
                    
//                     {/* //! SPAIN FORM */}

//                         {
//                             watch('country') === 'es' && (
//                         <>
//                             <label htmlFor='community'> Autonomous community </label>

//                             <select {...register("community", { required: true, })}>

//                                 { errors.country && <span>Autonomous community Required</span> }

//                                     <option value="cat"> Catalunya </option>
//                                     <option value="ast"> Asturias </option>
//                                     <option value="can"> Canarias </option>
//                                     <option value="and"> Andalucia </option>
//                                     <option value="gal"> Galicia</option>

//                             </select>
//                         </> )},

//                 {/* //! TERMS AND CONDITIONS */}

//                 <label htmlFor='terms'> Terms and Conditions </label>

//                 <input type='checkbox' {...register("terms", {
//                     required: true,
//                  })} />

//                 { errors.terms && <span> You must accept the terms and conditions </span> }



//                 <button type='submit'>
//                     Aceptar
//                 </button>

//                 // <pre>
//                 //     {JSON.stringify(watch(), null, 2)}
//                 // </pre>

//             </form>
//         </>
//     );
// }

// export default Hooks;
