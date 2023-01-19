import { useState } from 'react';
import Image from 'next/image';

import hoops from '../../public/site/hoops-bg.jpg';
import hoopsInverted from '../../public/site/hoops-inverted-bg.jpg';
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
            className={classes.bgFront}
            src={hoops}
            alt="hoops background"
            placeholder="blur"
            fill
          />
          <PanelFront onClick={handleClick} />
        </div>
      ) : (
        <div className={classes.back}>
          <Image
            className={classes.bgBack}
            src={hoops}
            alt="hoops background"
            placeholder="blur"
            fill
          />
          <PanelBack />
        </div>
      )}
    </div>
  );
};

export default WallPanel;
