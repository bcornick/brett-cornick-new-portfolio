import Star from './star';
import classes from './stars.module.css';

interface StarsProps {
  rating: number;
  totalStars: number;
}

const Stars = (props: StarsProps): JSX.Element => {
  let fillValues = Array(props.totalStars).fill(false);

  fillValues.forEach((value, i) => {
    if (props.rating > i) {
      fillValues[i] = true;
    }
  });

  return (
    <div className={classes.starContainer}>
      {fillValues.map((value, i) => (
        <Star
          key={i}
          filled={value}
        />
      ))}
    </div>
  );
};

export default Stars;
