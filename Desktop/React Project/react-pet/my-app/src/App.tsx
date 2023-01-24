import React, { Fragment } from 'react';

import './App.css';
import { Header } from './components/layout/header';
import { Meals } from './components/meals/meals';

export const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
