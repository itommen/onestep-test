import React from 'react';

import moment from 'moment';
import Typography from '@material-ui/core/Typography';

import styles from './index.module.scss';

const minutes = 0;

const Header = ({ steps, timestamp, seconds, ...props }) => {
  console.log(props);
  return <div className={styles.header}>
    <div className={styles.content}>
      <div>
        <Typography variant={'h4'}>Walk Summary</Typography>
        <Typography>{moment(timestamp).format('dddd, MMMM DD, YYYY hh:mm')}</Typography>
      </div>
      <Typography variant={'h5'}>
        {/* TODO: check for minuts */}
        {minutes} : {seconds}sec
      </Typography>
      <Typography variant={'h5'}>
        {steps} Steps
      </Typography>
    </div>
    <div className={styles.padding}>
    </div>
  </div>
}

export default Header;