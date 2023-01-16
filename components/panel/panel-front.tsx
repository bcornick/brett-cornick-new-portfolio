import Image from 'next/image';

import useWindowSize from '../../hooks/useWindowSize';
import brett from '../../public/site/brett.png';
import MobileContent from './mobile-content';
import classes from './panel-front.module.css';

interface FrontProps {
  onClick: () => void;
}

const PanelFront = ({ onClick }: FrontProps): JSX.Element => {
  const size = useWindowSize();
  return (
    <>
      {size.width && size.width > 999 ? (
        <>
          <Image
            className={classes.portrait}
            src={brett}
            alt="brett-image"
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
