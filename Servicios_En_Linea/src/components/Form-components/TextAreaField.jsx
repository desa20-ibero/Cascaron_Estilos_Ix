import { useField, ErrorMessage } from 'formik';


export const TextAreaField = ({fieldName, ...props}) => {

    const [ field ] = useField( props);
    return (
    <>
    <div className="form-group">
        <label htmlFor={ props.name }> { fieldName }</label>
        <textarea className='form-control mb-0' {...field} {...props} required ></textarea>
        <ErrorMessage name={props.name} component="span" className="text-red" role="alert"/>
    </div>
    </>

    )
}
