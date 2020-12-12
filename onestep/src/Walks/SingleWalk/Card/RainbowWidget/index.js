import React from 'react';

import { ReactComponent as StepRate } from './assets/step-rate.svg';
import { ReactComponent as Balance } from './assets/balance.svg';
import { ReactComponent as HipRange } from './assets/hip-range.svg';
import { ReactComponent as StepLength } from './assets/step-length.svg';
import { ReactComponent as Bubble } from './assets/bubble.svg';

import Typography from '@material-ui/core/Typography';

import styles from './index.module.scss';

const assetsIdToWidget = {
  rainbow_step_rate: StepRate,
  rainbow_balance: Balance,
  rainbow_stride_length: HipRange,
  rainbow_hip_range: StepLength
};

// funny name, but i changed the svg to use current as fill instead of using 3 different svgs :)
const bubbleColorToColor = {
  green: 'rgb(75,184,162)',
  yellow: 'rgb(251,185,58)',
  red: 'rgb(241,101,116)'
};

const rainbowWidth = 250;
const bubbleRadius = 30; // TODO: Maybe find better name, distance from the center of the bubble
const getBubblePosition = (start, end, value) => {
  return `${Math.max(Math.min(Math.abs((value - start) / (end - start)) * rainbowWidth, rainbowWidth), 0) - bubbleRadius}px`;
}

const RainbowWidget = ({ asset_id, bubble_color, start, end, value, units, ...props }) => {
  const RenderWidget = assetsIdToWidget[asset_id];
  const fill = bubbleColorToColor[bubble_color] ?? bubbleColorToColor.red;

  console.log(props);

  if (!RenderWidget) {
    // Or you prefer to have a default widget? 
    return <div></div>
  }

  const bubbleLeftPosition = getBubblePosition(start, end, value);

  return <div className={styles.rainbowOuterContainer}>
    <div className={styles.rainbowContainer}>
      <div className={styles.bubbleContainer}>
        <Bubble fill={fill} style={{ left: bubbleLeftPosition, position: 'relative' }} />
        <Typography className={styles.bubbleValue} style={{ left: bubbleLeftPosition }}>
          {value}
          <span className={styles.bubbleUnits}>{units ?? ''}</span>
        </Typography>
      </div>
      <RenderWidget />
      <div className={styles.unitsBar}>
        <span>{start}</span>
        <span>{end}</span>
      </div>
    </div>
  </div>;
}

export default RainbowWidget;