/**
 *
 * BadgeLevel
 *
 */

import React from 'react';
import style from './style.css';

function BadgeLevel({ value, disabled, color, level, location }) {
  if(!level) {
    return null;
  }
  const getLocationLevel = (location) => {
    switch (location) {
        case 'rightBottom': return { cx: 640, cy: 500 };
        case 'leftTop': return { cx: 120, cy: 150 };
        case 'leftBottom': return { cx: 120, cy: 500 };
        default: return { cx: 640, cy: 150 };
    }
  }
  const { cx, cy } = getLocationLevel(location);
  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r="55"
        color={color}
        visibility={disabled ? 'hidden' : 'visible'}
      />
        {value === 100 ? (
          <svg
            x={`${cx - 37}px`}
            y={`${cy - 37}px`}
            width="75px"
            height="75px"
            viewBox="-0 0 442 442"
          >
            <path
              d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248   l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852   C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828   c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33   c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"
              fill="#fff"
            />
          </svg>
        ) : (
          <text
            className={style.value}
            x={cx - 20}
            y={cy + 20}
            visibility={disabled ? 'hidden' : 'visible'}
          >
            {level}
          </text>
        )}    
    </>
  );
}

export default BadgeLevel;
