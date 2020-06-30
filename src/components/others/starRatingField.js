import React from 'react';
import Rating from '@material-ui/lab/Rating';

const StarRatingField = ({record}) => {
  // for test
  record.rating = 2;

  return record && record.rating ? (
    <span>
      <Rating value={record.rating} />
    </span>
  ) : null;
};

StarRatingField.defaultProps = {
  label: 'Rating',
  source: 'rating',
  addLabel: true,
};

export default StarRatingField;
