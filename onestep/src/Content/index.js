import React from 'react';

import styles from './index.module.scss';

// TODO: Find better name, just not to waste time
const Content = ({ children }) => <div className={styles.contentContainer}>
  {children}
</div>

export default Content;