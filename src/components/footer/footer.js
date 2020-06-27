import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_item'>
                <div className='footer_item_title'>Customer Support</div>
                <ul className='footer_item_list'>
                    <li className='footer_item_list_item'>Contact Us</li>
                    <li className='footer_item_list_item'>Help and FAQs</li>
                    <li className='footer_item_list_item'>Shipping / Returns</li>
                </ul>
            </div>
            <div className='footer_item'>
                <div className='footer_item_title'>Services</div>
                <ul className='footer_item_list'>
                    <li className='footer_item_list_item'>Credit</li>
                    <li className='footer_item_list_item'>Financial Services</li>
                    <li className='footer_item_list_item'>Gift Cards</li>
                </ul>
            </div>
            <div className='footer_item'>
                <div className='footer_item_title'>About</div>
                <ul className='footer_item_list'>
                    <li className='footer_item_list_item'>Careers</li>
                    <li className='footer_item_list_item'>Services</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
