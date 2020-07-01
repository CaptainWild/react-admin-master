import React from 'react';
import Chip from '@material-ui/core/Chip';

const ProductField = props => {
  const { productList, record } = props;
  const { product: ids } = record;

  return ids ? (
    ids.map(id => {
      const { title } = productList[id];
      return (
        <Chip
          key={id}
          // className={classes.chip}
          label={title}
        />
      )
    })
  ) : null;
}

ProductField.defaultProps = {
  label: 'Product',
  source: 'product',
  addLabel: true,
};

export default ProductField;