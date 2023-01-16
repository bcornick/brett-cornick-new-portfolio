import Image from 'next/image';

import brett from '../../public/site/brett.png';
import classes from './panel-front.module.css';

interface FrontProps {
  onClick: () => void;
}

const PanelFront = ({ onClick }: FrontProps): JSX.Element => {
  return (
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
  );
};

export default PanelFront;
