import { useEffect } from 'react';

import interests from '../../../content/interests';
import InterestRow from './interest-row';
import classes from './interest-box.module.css';

const itemsPerRow = 2;

let groupedArray: any = [];
for (let i = 0; i < interests.length; i += itemsPerRow) {
  const row = interests.slice(i, i + itemsPerRow);
  groupedArray.push(row);
}

interface InterestBoxProps {
  page: number;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
}

const InterestBox = (props: InterestBoxProps): JSX.Element => {
  const pageArray = Array.apply(null, Array(props.totalPages)).map((x, i) => {
    return i;
  });

  useEffect(() => {
    props.setTotalPages(Math.ceil(interests.length / (itemsPerRow * 2)));
  }, [props]);

  return (
    <div className={classes.content}>
      {pageArray.map(
        page =>
          props.page === page + 1 && (
            <>
              <InterestRow interests={groupedArray[(page + 1) * 2 - 2]} />
              <InterestRow interests={groupedArray[(page + 1) * 2 - 1]} />
            </>
          )
      )}
    </div>
  );
};

export default InterestBox;
