
import './collection-item.scss'
import React from 'react'

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div
            className='collection-item_image'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className='collection-item_footer'>
            <span className='collection-item_footer_name'>{name}</span>
            <span className='collection-item_footer_price'>{price}</span>
        </div>
    </div>
)

export default CollectionItem
