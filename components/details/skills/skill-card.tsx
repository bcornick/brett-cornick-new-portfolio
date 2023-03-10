import Image from 'next/image';

import { Skill } from '../../../content/skills';
import Stars from './stars';
import classes from './skill-card.module.css';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps): JSX.Element => {
  return (
    <div className={classes.card}>
      <div className={classes.mainContent}>
        <Image
          src={skill.image}
          alt={skill.title}
          height={130}
          width={130}
          className={classes.skillImage}
        />
        <h3>{skill.title}</h3>
      </div>
      <div className={classes.hoverContent}>
        <h3>Proficiency:</h3>
        <Stars
          rating={skill.proficiency}
          totalStars={5}
        />
      </div>
    </div>
  );
};

export default SkillCard;
