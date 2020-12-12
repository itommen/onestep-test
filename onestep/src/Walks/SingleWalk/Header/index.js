import React from 'react';

import moment from 'moment';

import styles from './index.module.scss';

const minutes = 0;

const Header = ({ steps, timestamp, seconds }) => {
  return <div className={styles.header}>
    <div className={styles.content}>
      <div>
        <div>Walk Summary</div>
        <div>{moment(timestamp).format('dddd, MMMM DD, YYYY hh:mm')}</div>
      </div>
      <div>
        {/* TODO: check for minuts */}
        {minutes} : {seconds} sec
      </div>
      <div>
        {steps} Steps
      </div>
    </div>
    <div className={styles.padding}>
    </div>
  </div>
}

export default Header;