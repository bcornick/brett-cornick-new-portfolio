import { useState, WheelEvent } from 'react';

import ExpBox from './experience/exp-box';
import InterestBox from './interests/interest-box';
import SkillsBox from './skills/skills-box';
import Paginator from './paginator/paginator';
import classes from './item-details.module.css';

interface ItemDetailsProps {
  page: string;
}

const ItemDetails = (props: ItemDetailsProps): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  function handleScroll(e: WheelEvent<HTMLDivElement>) {
    if (Math.abs(e.deltaY) > 10) {
      if (e.deltaY > 0) {
        setPage(Math.min(page + 1, totalPages));
      } else {
        setPage(Math.max(page - 1, 1));
      }
    }
  }

  return (
    <>
      <div
        className={classes.contentContainer}
        onWheel={handleScroll}>
        {props.page === 'Skills' && (
          <SkillsBox
            page={page}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
          />
        )}
        {props.page === 'Interests' && (
          <InterestBox
            page={page}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
          />
        )}
        {props.page === 'Experience' && (
          <ExpBox
            page={page}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
          />
        )}
        <Paginator
          currentPage={page}
          changePage={setPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default ItemDetails;
