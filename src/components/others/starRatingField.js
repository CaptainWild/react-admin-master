import React from 'react';
import Rating from '@material-ui/lab/Rating';

const StarRatingField = ({record}) => {

  return record ? (
    <span>
      <Rating value={record.rating} readOnly />
    </span>
  ) : null;
};

StarRatingField.defaultProps = {
  label: 'Rating',
  source: 'rating',
  addLabel: true,
};

export default StarRatingField;
