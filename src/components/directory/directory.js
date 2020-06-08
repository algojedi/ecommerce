import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss'

function Directory() {
    const sections = [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            size: 'md',
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            size: 'md',
            id: 2,
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,

            size: 'md',
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'lg',
            id: 4,
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'lg',
            id: 5,
        },
    ]
    return (
        <div className='directory-menu'>
            {sections.map(({ title, imageUrl, id, size }) => (
                <MenuItem
                    key={id}
                    title={title}
                    imageUrl={imageUrl}
                    size={size}
                    className='directory-menu_item'
                />
            ))}
        </div>
    )
}

export default Directory
