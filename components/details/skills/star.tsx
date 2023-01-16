import classes from './star.module.css';

interface StarProps {
  filled: boolean;
}

const Star = (props: StarProps): JSX.Element => {
  return (
    <div className={props.filled ? classes.filledStar : classes.emptyStar}>
      ★
    </div>
  );
};

export default Star;
