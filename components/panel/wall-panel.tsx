import { useState } from 'react';
import Image from 'next/image';

import PanelBack from './panel-back';
import PanelFront from './panel-front';

import classes from './wall-panel.module.css';

const WallPanel = (): JSX.Element => {
  const [front, setFront] = useState<boolean>(true);

  function handleClick() {
    setFront(!front);
  }

  return (
    <div
      className={
        front
          ? classes.wallContainer
          : `${classes.wallContainer} ${classes.flip}`
      }>
      {front ? (
        <div className={classes.front}>
          <Image
            className={classes.bgImage}
            src="/site/hoops-bg.jpg"
            alt="hoops background"
            placeholder="blur"
            blurDataURL="/site/hoops-bg.jpg"
            fill
          />
          <PanelFront onClick={handleClick} />
        </div>
      ) : (
        <div className={classes.back}>
          <Image
            className={classes.bgImage}
            src="/site/hoops-inverted-bg.jpg"
            alt="hoops background"
            placeholder="blur"
            blurDataURL="/site/hoops-inverted-bg.jpg"
            fill
          />
          <PanelBack />
        </div>
      )}
    </div>
  );
};

export default WallPanel;
