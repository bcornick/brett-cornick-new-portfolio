import InterestCard from './interest-card';
import { Interest } from '../../../content/interests';
import classes from './interest-row.module.css';

interface InterestRowProps {
  interests: Interest[];
}

const InterestRow = ({ interests }: InterestRowProps): JSX.Element => {
  return (
    <div className={classes.row}>
      {interests.map((interest: Interest) => (
        <InterestCard
          key={interest.title}
          interest={interest}
        />
      ))}
    </div>
  );
};

export default InterestRow;
