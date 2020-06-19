import { createSelector } from 'reselect'


const selectShop = (state) => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

// convert our object into an array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map((key) => collections[key])
)

export const selectCollection = (collectionUrlParam) =>
    createSelector(
        [selectCollections],
        (collections) => collections[collectionUrlParam]
    )
