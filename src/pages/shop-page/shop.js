import './shop.scss'

import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection-page/collection-page';
import { api } from '../../api/api';
import { collectionMapping } from '../../redux/reducers/shop/shop.utils';
import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/actions/actions';
import WithSpinner from '../../components/with-spinner/with-spinner';


const ShopPage = ( {match } ) => {
    
    const SpinnedCollectionsOverview = WithSpinner(CollectionsOverview)
    const SpinnedCollectionPage = WithSpinner(CollectionPage)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        fetch(api + 'products') 
            .then(results => results.json())
            .then(collection => {
                setLoading(false)
                const convertedCollection = collectionMapping(collection)
                // console.log(convertedCollection)
                dispatch(updateCollections(convertedCollection))
            })
            .catch(err => {
                console.log(err.message)                
            })
        
        
    }, [dispatch])

    return (

        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <SpinnedCollectionsOverview isLoading={loading} {...props}/>} />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <SpinnedCollectionPage isLoading={loading} {...props}/>} />

        </div>
    )
    }


export default ShopPage



