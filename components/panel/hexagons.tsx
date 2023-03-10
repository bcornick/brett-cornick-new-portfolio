import Image from 'next/image';
import hexagon from '../../public/site/hex-pink.png';
import classes from './hexagons.module.css';

const numHexes = 12;

const Hexagons = (): JSX.Element => {
  const hexArray = Array.apply(null, Array(numHexes)).map((x, i) => {
    return i;
  });

  return (
    <div className={classes.hexContainer}>
      {hexArray.map((hex, i) => (
        <Image
          key={i}
          className={classes.hexagon}
          src={hexagon}
          alt="hexagon"
          fill
          sizes="
              33vw"
        />
      ))}
    </div>
  );
};

export default Hexagons;
