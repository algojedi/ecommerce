import './shop.scss'

import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import { useSelector } from 'react-redux';


const ShopPage = () => {
    const { collections } = useSelector(state => state.shop)
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
}

export default ShopPage
