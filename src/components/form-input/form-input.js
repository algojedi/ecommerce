import React, {useState} from 'react'

import './form-input.scss'

const FormInput = ({ label, reference, ...otherProps }) => {
    // console.log('from form input, here are other props...')
    // console.log(otherProps)
    let [value, setValue] = useState('')
    return (
    <div className='form-component'>
        <input className='form-component_input' value={value} ref={reference} onChange={e => setValue(e.target.value)} {...otherProps} />
        {label ? (
            <label
                className={`${
                    value.length ? 'shrink' : ''
                } form-component_label`}
            >
                {label}
            </label>
        ) : null}
    </div>
)}

export default FormInput
