import React from 'react'

import './custom-btn.scss'

const CustomButton = ({ children, ...otherProps }) => {
    let classAddOn = otherProps.variation ? otherProps.variation : '';  
    console.log('class added to btn: ', classAddOn)
    return (
    <button className={`custom-button ${classAddOn}`}  {...otherProps}>
        {children}
    </button>
)}

export default CustomButton
