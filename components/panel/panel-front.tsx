import Image from 'next/image';

import useWindowSize from '../../hooks/useWindowSize';
import brett from '../../public/site/brett-toon.png';
import MobileContent from './mobile-content';
import classes from './panel-front.module.css';

interface FrontProps {
  onClick: () => void;
}

const PanelFront = ({ onClick }: FrontProps): JSX.Element => {
  const size = useWindowSize();
  return (
    <>
      {size.width === undefined || size.width > 999 ? (
        <>
          <Image
            className={classes.portrait}
            src={brett}
            alt="brett-toon"
            height={425}
            width={425}
            placeholder="blur"
          />
          <div>
            <button
              className={classes.meetBtn}
              onClick={onClick}>
              Meet Me
            </button>
          </div>
        </>
      ) : (
        <MobileContent />
      )}
    </>
  );
};

export default PanelFront;
