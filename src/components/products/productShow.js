import React from 'react';
import { Show, TopToolbar, EditButton, DeleteButton } from 'react-admin';

import ShowDetails from './common/showDetails';

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
      <EditButton basePath={basePath} record={data} />
      <DeleteButton basePath={basePath} record={data} resource='posts' />
  </TopToolbar>
);

export const ProductShow = (props) => (
  <Show title={<PostTitle />} actions={<PostShowActions />} {...props}>
    <ShowDetails />
  </Show>
)