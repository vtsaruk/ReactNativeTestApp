import React from 'react';
import {Layout, Notification} from '../components/common';

const LayoutHoc = (WrappedComponent: React.FunctionComponent) => () =>
  (
    <Layout>
      <Notification />
      <WrappedComponent />
    </Layout>
  );

export default LayoutHoc;
