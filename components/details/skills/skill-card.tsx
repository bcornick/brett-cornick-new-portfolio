import Image from 'next/image';

import { Skill } from '../../../content/skills';
import Stars from './stars';
import classes from './skill-card.module.css';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = (props: SkillCardProps): JSX.Element => {
  return (
    <div className={classes.card}>
      <div className={classes.mainContent}>
        <Image
          src={props.skill.image}
          alt={props.skill.title}
          height={200}
          width={200}
          className={classes.skillImage}
        />
        <h3>{props.skill.title}</h3>
      </div>
      <div className={classes.hoverContent}>
        <h3>Proficiency:</h3>
        <Stars
          rating={props.skill.proficiency}
          totalStars={5}
        />
      </div>
    </div>
  );
};

export default SkillCard;
