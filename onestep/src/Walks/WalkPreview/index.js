import React from 'react';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

import styles from './index.module.scss';

// assume max is 8, just const for now, colors could be hard coded for nicer colors, just for now;
const maxExtractionLevel = 8.0;
const extractionLevelToColor = [...new Array(8)].map((x,index) => `rgb(${(index / maxExtractionLevel) * 255}, ${255 - (index / maxExtractionLevel) * 255}, 0)`);

const WalkPreview = ({ title, id, extraction_level }) => <ListItem button component="a" href={`/${id}`}>
  <ListItemText className={styles.walkPreviewContainer} style={{ borderColor: extractionLevelToColor[extraction_level] ?? 'red' }}>
    {title}
  </ListItemText>
</ListItem >

export default WalkPreview;