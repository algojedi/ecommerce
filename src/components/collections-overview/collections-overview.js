import React from 'react'
import { useSelector } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview'
import './collections-overview.scss'

const CollectionsOverview = () => {
    const { collections } = useSelector((state) => state.shop)
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default CollectionsOverview
