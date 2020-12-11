import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import RainbowWidget from './RainbowWidget';

import styles from './index.module.scss';

const WalkCard = ({ title, rainbow, description }) => {
  return <Card className={styles.cardContainer}>
    <Typography align={'center'}>{title}</Typography>
    <Typography align={'center'}>{description}</Typography>
    <Divider />
    <RainbowWidget {...rainbow} />
  </Card>
};

export default WalkCard;