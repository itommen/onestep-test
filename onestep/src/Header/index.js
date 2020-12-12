import React from 'react';

import { ReactComponent as Logo } from '../assets/logos/logo.svg';

import styles from './index.module.scss';

const Header = () => {
  return <div className={styles.headerContainer}>
    <Logo />
  </div>
};

export default Header;