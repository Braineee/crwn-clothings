import React from 'react'

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-previews/collection-preview.component'

class ShopePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProperties }) => (
            <CollectionPreview key={id} { ...otherCollectionProperties } />
          ))
        }
      </div>
    )
  }
}

export default ShopePage;