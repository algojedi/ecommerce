import { FaSearch } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import React from 'react'
import './searchfield.scss'

function SearchField() {
    return (
        <IconContext.Provider
            value={{ className: 'search-field_icons-provider' }}
        >
            <div className='search-field'>
                <FaSearch className='search-field_icon' size='14px' />
                <input type='text' className='search-field_text-field' />
            </div>
        </IconContext.Provider>
    )
}

export default SearchField
