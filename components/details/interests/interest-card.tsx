import Image from 'next/image';

import { Interest } from '../../../content/interests';
import classes from './interest-card.module.css';

interface InterestCardProps {
  interest: Interest;
}

const InterestCard = ({ interest }: InterestCardProps): JSX.Element => {
  return (
    <div className={classes.card}>
      <Image
        className={classes.image}
        src={interest.image}
        alt={interest.title}
        fill
        placeholder="blur"
        blurDataURL={interest.image}
      />
      <div className={classes.textContainer}>
        <div className={classes.title}>{interest.title}</div>
      </div>
      <div className={classes.hoverContent}>
        <h3>{interest.description}</h3>
      </div>
    </div>
  );
};

export default InterestCard;
