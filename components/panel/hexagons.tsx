import Image from 'next/image';
import hexagon from '../../public/site/hexagon.png';
import classes from './hexagons.module.css';

const Hexagons = (): JSX.Element => {
  return (
    <div className={classes.hexContainer}>
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
      <Image
        className={classes.hexagon}
        src={hexagon}
        alt="hexagon"
        fill
      />
    </div>
  );
};

export default Hexagons;
