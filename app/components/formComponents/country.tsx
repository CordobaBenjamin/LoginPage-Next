import { useFormContext } from 'react-hook-form';

export const Country = () => {

    const { register,formState: {errors}, watch } = useFormContext();

    return (
      <>
            <label htmlFor='country'> Country </label>

            <select id='country' {...register("country", {required: true, })}>

                {errors.oth && <span>Please, put your country.</span>}

                            <option value="es"> Spain </option>
                            <option value="eeuu"> United State </option>
                            <option value="ar"> Argentine </option>
                            <option value="mx"> Mexico </option>
                            <option value="jpn"> Japan </option>
                            <option value="oth"> Other </option>
                            
            </select>

                {/* //! OTHER OPTION FORM */}

                {
                    watch('country') === 'oth' && (
                <>
                    <label htmlFor='oth'> Other </label>
                    <input id='oth' type='Text' placeholder='Put your country'/> 

                </>)}


                {/* //! UNITED STATE FORM */}

                {
                    watch('country') === 'eeuu' && (
                <>
                    <label htmlFor='state'> State </label>

                    <select {...register("state", { required: true, })}>

                        { errors.country && <span>State Required</span> }

                            <option value="ca"> California </option>
                            <option value="de"> Delawere </option>
                            <option value="hi"> Hawai </option>
                            <option value="ny"> New York </option>
                            <option value="mn"> Minnesota </option>

                    </select>
                </>)}

            {/* //! MEXICO FORM */}

                {
                    watch('country') === 'mx' && (
                <>
                    <label htmlFor='state'> State </label>

                    <select id='state' {...register("state", { required: true, })}>

                        { errors.country && <span>State Required</span> }
                        
                            <option value="cdmx"> Ciudad de Mexico </option>
                            <option value="nl"> Nueva Leon </option>
                            <option value="yn"> Yucatan </option>
                            <option value="cc"> Campeche </option>
                            <option value="oc"> Oaxaca </option>

                    </select>
                </>)}

            {/* //! ARGENTINE FORM */}

                {
                    watch('country') === 'ar' && (
                <>
                    <label htmlFor='province'> Province </label>

                    <select id='province' {...register("province", { required: true, })}>

                        { errors.country && <span>Province Required</span> }

                            <option value="ba"> Buenos Aires </option>
                            <option value="sf"> Santa Fe </option>
                            <option value="cba"> Cordoba </option>
                            <option value="lr"> La Rioja </option>
                            <option value="jjy"> Jujuy </option>

                    </select>
                </>)}

            {/* //! JAPAN FORM */}

                {
                    watch('country') === 'jpn' && (
                <>
                    <label htmlFor='district'> District </label>

                    <select id='district' {...register("district", { required: true, })}>

                        { errors.country && <span>District Required</span> }

                            <option value="jpn-os"> 大阪府 (Osaka) </option>
                            <option value="jpn-to"> 東京都 (Tokio) </option>
                            <option value="jpn-na"> 長野県 (Nagano) </option>
                            <option value="jpn-ka"> 香川県 (Kanagawa) </option>
                            <option value="jpn-sh"> 滋賀県	(Shiga) </option>

                    </select>
                </>)}
            
            {/* //! SPAIN FORM */}

                {
                    watch('country') === 'es' && (
                <>
                    <label htmlFor='community'> Autonomous community </label>

                    <select id='community' {...register("community", { required: true, })}>

                        { errors.country && <span>Autonomous community Required</span> }

                            <option value="cat"> Catalunya </option>
                            <option value="ast"> Asturias </option>
                            <option value="can"> Canarias </option>
                            <option value="and"> Andalucia </option>
                            <option value="gal"> Galicia</option>

                    </select>
                </> )}

            </>
            )
  }
  
  export default Country;