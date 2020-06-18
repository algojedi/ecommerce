import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss'
import { useSelector } from 'react-redux'

function Directory() {
   const { sections } = useSelector(state => state.directory) 
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
