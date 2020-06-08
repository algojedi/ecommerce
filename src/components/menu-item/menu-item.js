import React from 'react'

import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className='menu-item_background-image'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className='menu-item_content'>
            <h1 className='menu-item_content_title'>{title.toUpperCase()}</h1>
            <span className='menu-item_content_subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem
