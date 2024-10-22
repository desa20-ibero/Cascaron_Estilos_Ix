import { useField } from 'formik';
import React from 'react'
import { memo } from 'react';

export const CheckboxField = memo(({fieldName, ...props}) => {

    const [ field ] = useField( props);
    return (
    <>
    <div className="form-check">
        <input
            className="form-check-input"
            {...field}
            {...props}
        />
        <label className="form-check-label" >
            {fieldName}
        </label>
    </div> 
    </>
    )
})
