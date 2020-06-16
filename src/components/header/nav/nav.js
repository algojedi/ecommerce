import React from 'react'
import './nav.scss'
import { MdDehaze } from 'react-icons/md'
import { IconContext } from 'react-icons'
import SearchField from '../searchfield/searchfield'
import { Link, useHistory } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { setUser } from '../../../redux/actions/actions'
import CartIcon from '../../cart-icon/cart-icon'
import CartDropdown from '../../cart-dropdown/cart-dropdown'

const Nav = ({ currentUser, hidden }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSignOut = () => {
        dispatch(setUser(null))
        history.push('/')
    }
    return (
        <IconContext.Provider value={{ className: 'nav-icons-provider' }}>
            <div className='navbar'>
                <MdDehaze className='navbar_burger' />
                <h1 className='navbar_title'>The Clothing Store</h1>
                <div className='navbar_searchfield'>
                    <SearchField />
                </div>
                <div className='navbar_profile'>
                    {currentUser ? (
                        <div
                            onClick={handleSignOut}
                            className='navbar_profile_signin-link'
                        >
                            Sign Out
                        </div>
                    ) : (
                        <Link
                            to='/signin'
                            className='navbar_profile_signin-link'
                        >
                            Sign In
                        </Link>
                    )}
                    <div className='navbar_profile_cart'>
                        <CartIcon />
                    </div>
                </div>
            </div>
            {
hidden ? <CartDropdown /> : null
            }
            <ul className='navbar_links'>
                <li className='navbar_links_link'>MEN</li>
                <li className='navbar_links_link'>WOMEN</li>
                <li className='navbar_links_link'>HATS</li>
                <li className='navbar_links_link'>SALE</li>
            </ul>
        </IconContext.Provider>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: {hidden} } ) => ({
    currentUser, hidden
})

export default connect(mapStateToProps)(Nav)
