import SkillCard from './skill-card';
import { Skill } from '../../../content/skills';
import classes from './skill-row.module.css';

interface SkillRowProps {
  skills: Skill[];
}

const SkillRow = ({ skills }: SkillRowProps): JSX.Element => {
  return (
    <div className={classes.row}>
      {skills.map((skill: Skill) => (
        <SkillCard
          key={skill.title}
          skill={skill}
        />
      ))}
    </div>
  );
};

export default SkillRow;
