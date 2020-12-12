import React from 'react';

import { ReactComponent as StepRate } from './assets/step-rate.svg';
import { ReactComponent as Balance } from './assets/balance.svg';
import { ReactComponent as HipRange } from './assets/hip-range.svg';
import { ReactComponent as StepLength } from './assets/step-length.svg';

import { ReactComponent as Bubble } from './assets/bubble.svg';

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

const RainbowWidget = ({ asset_id, bubble_color, start, end, value, ...props }) => {
  const RenderWidget = assetsIdToWidget[asset_id];
  const fill = bubbleColorToColor[bubble_color] ?? bubbleColorToColor.red;

  console.log(props);

  if (!RenderWidget) {
    // Or you prefer to have a default widget? 
    return <div></div>
  }

  return <div className={styles.rainbowContainer}>
    <div>
      <Bubble fill={fill} />
    </div>
    <RenderWidget />
    <div className={styles.unitsBar}>
      <span>{start}</span>
      <span>{end}</span>
    </div>
  </div>;
}

export default RainbowWidget;