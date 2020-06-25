import React from 'react'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {  selectIsCollectionFetching } from '../../redux/selectors/shop.selectors';
import collectionPage from './collection-page';
import WithSpinner from '../../components/with-spinner/with-spinner';

const mapStateToProps = createStructuredSelector({
//   isLoading: selectIsCollectionFetching
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionPage);

export default CollectionPageContainer