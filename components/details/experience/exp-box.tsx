import { useEffect, Fragment } from 'react';

import experiences from '../../../content/experiences';
import ExpRow from './exp-row';
import classes from './exp-box.module.css';

const itemsPerRow = 1;

let groupedArray: any = [];
for (let i = 0; i < experiences.length; i += itemsPerRow) {
  const row = experiences.slice(i, i + itemsPerRow);
  groupedArray.push(row);
}

interface ExpBoxProps {
  page: number;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
}

const ExpBox = (props: ExpBoxProps): JSX.Element => {
  const pageArray = Array.apply(null, Array(props.totalPages)).map((x, i) => {
    return i;
  });

  useEffect(() => {
    props.setTotalPages(Math.ceil(experiences.length / (itemsPerRow * 2)));
  }, [props]);

  return (
    <div className={classes.content}>
      {pageArray.map(
        page =>
          props.page === page + 1 && (
            <Fragment key={page}>
              <ExpRow experiences={groupedArray[(page + 1) * 2 - 2]} />
              <ExpRow experiences={groupedArray[(page + 1) * 2 - 1]} />
            </Fragment>
          )
      )}
    </div>
  );
};

export default ExpBox;
