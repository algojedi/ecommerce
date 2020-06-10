import React from 'react'
import { Link , useHistory } from 'react-router-dom'

import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size }) => {
    // const history = useHistory();    
    
    return (

    <div className={`${size} menu-item`}>
        <Link to={`/${title}`} >
        <div
            className='menu-item_background-image'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        
        </Link> 
        <div className='menu-item_content'>
            <h1 className='menu-item_content_title'>{title.toUpperCase()}</h1>
            <span className='menu-item_content_subtitle'>SHOP NOW</span>
        </div>
    </div>
) }

export default MenuItem
