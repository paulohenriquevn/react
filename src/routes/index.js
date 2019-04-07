import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutContainer from '../pages/Layout/layout.container';
import ListaRepositorio from '../pages/ListaRepositorio/listarepositorio.page';

const Routes = () => (
  <BrowserRouter>
    <LayoutContainer>
      <Switch>
        <Route exact path="/" component={ListaRepositorio} />
      </Switch>
    </LayoutContainer>
  </BrowserRouter>
);

export default Routes;
