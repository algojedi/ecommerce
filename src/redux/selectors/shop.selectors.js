import { createSelector } from 'reselect'

// needed in order to use match param (collectionId) to path name
const COLL_ID_MAP = {
    hats: 1, 
    sneakers: 2,
    jackets: 3,
    women: 4,
    mens: 5
}

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map((key) => collections[key])
)

// collectionUrlParam will be passed in via match object's param property, given by router 
export const selectCollection = (collectionUrlParam) =>
    createSelector( [selectCollections], collections => 
        collections.find(collection => collection.id === COLL_ID_MAP[collectionUrlParam])

    )
// export const selectCollection = (collectionUrlParam) =>
//     createSelector(
//         [selectCollections],
//         (collections) => collections[collectionUrlParam]
//     )
