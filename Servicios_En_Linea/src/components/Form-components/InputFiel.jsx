import { useField, ErrorMessage } from 'formik';


export const InputField = ({fieldName, ...props}) => {

    const [ field ] = useField( props);
    return (
    <>
    <div className="form-group -align-flex-row aling-flex-center-row">
        <label className='wdt-datos -align-flex-rowend' htmlFor={ props.name }> { fieldName }</label>
        <div className='input-error'>
        <input className='form-control datos' {...field} {...props} required/>
        <ErrorMessage name={props.name} component="span" className="text-red mt-15px mb-2" role="alert"/>
        </div>
    </div>
    </>

    )
}
