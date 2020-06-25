import './shop.scss'

import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection-page/collection-page';
// import { api } from '../../api/api';
// import { collectionMapping } from '../../redux/reducers/shop/shop.utils';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchCollections } from '../../redux/actions/actions';
import WithSpinner from '../../components/with-spinner/with-spinner';


const ShopPage = ( {match } ) => {
    const { isLoading } = useSelector(state => state.shop) 
    const dispatch = useDispatch()
    const SpinnedCollectionsOverview = WithSpinner(CollectionsOverview)
    const SpinnedCollectionPage = WithSpinner(CollectionPage)
    // const [loading, setLoading] = useState(false)
    useEffect(() => {
        
        dispatch(asyncFetchCollections());
        
    }, [dispatch])

    return (

        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <SpinnedCollectionsOverview isLoading={isLoading} {...props}/>} />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <SpinnedCollectionPage isLoading={isLoading} {...props}/>} />

        </div>
    )
    }


export default ShopPage



