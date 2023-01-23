import { useEffect, Fragment } from 'react';
import skills from '../../../content/skills';
import classes from './skills-box.module.css';
import SkillRow from './skill-row';

const itemsPerRow = 4;

let groupedArray: any = [];
for (let i = 0; i < skills.length; i += itemsPerRow) {
  const row = skills.slice(i, i + itemsPerRow);
  groupedArray.push(row);
}

interface SkillsBoxProps {
  page: number;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
}

const SkillsBox = (props: SkillsBoxProps): JSX.Element => {
  const pageArray = Array.apply(null, Array(props.totalPages)).map((x, i) => {
    return i;
  });

  useEffect(() => {
    props.setTotalPages(Math.ceil(skills.length / (itemsPerRow * 2)));
  }, [props]);

  return (
    <div className={classes.content}>
      {pageArray.map(
        page =>
          props.page === page + 1 && (
            <Fragment key={page}>
              <SkillRow skills={groupedArray[(page + 1) * 2 - 2]} />
              <SkillRow skills={groupedArray[(page + 1) * 2 - 1]} />
            </Fragment>
          )
      )}
    </div>
  );
};

export default SkillsBox;
