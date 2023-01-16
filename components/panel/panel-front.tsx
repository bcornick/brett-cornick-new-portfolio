import Image from 'next/image';

import classes from './panel-front.module.css';

interface FrontProps {
  onClick: () => void;
}

const PanelFront = ({ onClick }: FrontProps): JSX.Element => {
  return (
    <>
      <Image
        className={classes.portrait}
        src="/site/brett.png"
        alt="brett-image"
        height={425}
        width={425}
        placeholder="blur"
        blurDataURL="/site/brett.png"
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
