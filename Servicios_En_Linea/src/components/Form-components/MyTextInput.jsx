import { useField, ErrorMessage } from 'formik';


export const MyTextInput = ({fieldName, ...props}) => {

    const [ field ] = useField( props);
    return (
    <>
    <div className="form-group text-center">
        <label htmlFor={ props.name }  className='color-title'> { fieldName }</label>
        <input className='form-control mb-0' {...field} {...props} required/>
        <ErrorMessage name={props.name} component="span" className="text-red" role="alert"/>
    </div>
    </>

    )
}
