import ExperienceCard from './exp-card';
import { Experience } from '../../../content/experiences';
import classes from './exp-row.module.css';

interface ExpRowProps {
  experiences: Experience[];
}

const ExpRow = ({ experiences }: ExpRowProps): JSX.Element => {
  return (
    <div className={classes.row}>
      {experiences.map((experience: Experience) => (
        <ExperienceCard
          key={experience.title}
          experience={experience}
        />
      ))}
    </div>
  );
};

export default ExpRow;
