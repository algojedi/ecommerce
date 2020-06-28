import './shop.scss'

import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchCollections } from '../../redux/actions/actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection-page/collection-page.container'

const ShopPage = ({ match }) => {
    // const { isLoading } = useSelector((state) => state.shop)
    const dispatch = useDispatch()
    // const [loading, setLoading] = useState(false)
    useEffect(() => {
        dispatch(asyncFetchCollections())
    }, [dispatch])

    return (
        <div className='shop-page'>
            <Route
                exact path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}    />
        </div>
    )
}

export default ShopPage
