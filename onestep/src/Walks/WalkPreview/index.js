import React from 'react';

import { Link } from 'react-router-dom';

import styles from './index.module.scss';

// assume max is 8, just con ;
const maxExtractionLevel = 8.0;
const extractionLevelToColor = [...new Array(8)].map((x,index) => `rgb(${(index / maxExtractionLevel) * 255}, ${255 - (index / maxExtractionLevel) * 255}, 0)`);

const WalkPreview = ({ title, id, extraction_level }) => <Link to={`/${id}`}>
  <span className={styles.walkPreviewContainer} style={{ borderColor: extractionLevelToColor[extraction_level] ?? 'red' }}>
    {title}
  </span>
</Link>

export default WalkPreview;