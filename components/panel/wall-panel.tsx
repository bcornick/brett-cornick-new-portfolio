import { useState } from 'react';

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
          <PanelFront onClick={handleClick} />
        </div>
      ) : (
        <div className={classes.back}>
          <PanelBack />
        </div>
      )}
    </div>
  );
};

export default WallPanel;
