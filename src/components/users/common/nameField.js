import React from 'react';
import { Avatar } from '@material-ui/core';

const NameField = ({record}) => {
  const { avatar_urls } = record;
  return record ? (
    <div style={{width: 300, display: 'flex'}}>
      {!!avatar_urls ? <Avatar src={avatar_urls[48]} style={{width: 25, height: 25, margin: 10}} /> : <Avatar style={{width: 25, height: 25, margin: 10}} />}
      <p>{record.name}</p>
    </div>
  ) : null;
};

NameField.defaultProps = {
  label: 'Name',
  source: 'name',
  addLabel: true,
};

export default NameField;