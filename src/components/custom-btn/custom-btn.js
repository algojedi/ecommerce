import React from 'react'

import './custom-btn.scss'

const CustomButton = ({ children, ...otherProps }) => {
    let classAddOn = otherProps.variation ? otherProps.variation : '';  
    return (
    <button className={`custom-button ${classAddOn}`}  {...otherProps}>
        {children}
    </button>
)}

export default CustomButton
