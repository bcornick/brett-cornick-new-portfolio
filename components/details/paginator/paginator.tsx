import PageIcon from './page-icon';
import classes from './paginator.module.css';

interface PaginatorProps {
  changePage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

const Paginator = (props: PaginatorProps): JSX.Element => {
  const pageArray = Array.apply(null, Array(props.totalPages)).map((x, i) => {
    return i;
  });

  return (
    <div className={classes.paginator}>
      {pageArray.map(page => (
        <PageIcon
          key={page}
          id={page + 1}
          isSelected={props.currentPage === page + 1 ? true : false}
          handleClick={props.changePage}
        />
      ))}
    </div>
  );
};

export default Paginator;
