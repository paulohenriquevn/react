import React, { Fragment } from 'react';
import Content from './Content/content.component';
import Header from './Header/header.component';

const Layout = props => (
  <Fragment>
    <Header placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    <Content>{props.children}</Content>
  </Fragment>
);

export default Layout;
