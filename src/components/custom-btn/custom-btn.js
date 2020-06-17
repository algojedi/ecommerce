import React from 'react'

import './custom-btn.scss'

const CustomButton = ({ children, ...otherProps }) => {
    // let inverted = otherProps.inverted ? otherProps.inverted : '';  
    const inverted = otherProps.inverse ? 'inverse' : ''
    const opaque = otherProps.opaque ? 'opaque' : ''
    return (
    <button className={`custom-button ${inverted} ${opaque}`}  {...otherProps}>
        {children}
    </button>
)}

export default CustomButton
