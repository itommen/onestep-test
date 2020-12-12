import React from 'react';

import Header from './Header';
import Content from './Content';
import Routes from './Routes';

import styles from './index.module.scss';

const App = () => {
  return <div>
    <Header />
    <Content>
      <Routes />
    </Content>
  </div>
};

export default App;