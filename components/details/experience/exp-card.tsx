import Image from 'next/image';

import { Experience } from '../../../content/experiences';
import classes from './exp-card.module.css';

interface ExpCardProps {
  experience: Experience;
}

const ExpCard = ({ experience }: ExpCardProps): JSX.Element => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={experience.image}
          alt={experience.title}
          fill
          sizes="20vw"
        />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.title}>{experience.title}</div>
        <div className={classes.role}>
          {experience.position}{' '}
          <span
            className={
              experience.schedule === 'Full Time'
                ? classes.fullTime
                : classes.partTime
            }>
            {experience.schedule}
          </span>
        </div>
        <div className={classes.date}>
          Start:{' '}
          {experience.start
            .toLocaleDateString('en-UK', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
            .split(' ')
            .slice(1)
            .join(' ')}
        </div>
        <div className={classes.date}>
          End:{' '}
          {typeof experience.end === 'string'
            ? experience.end
            : experience.end
                .toLocaleDateString('en-UK', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
                .split(' ')
                .slice(1)
                .join(' ')}
        </div>
      </div>
      <div className={classes.hoverContent}>
        <h3>Highlights:</h3>
        <ul className={classes.highlights}>
          {experience.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpCard;
