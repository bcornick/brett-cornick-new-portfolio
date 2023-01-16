import Image from 'next/image';
import { useRouter } from 'next/router';

import brettCornick from '../public/site/brett-cornick.png';
import classes from './banner.module.css';

const Banner = (): JSX.Element => {
  const router = useRouter();

  function handleRefresh(): void {
    router.reload();
  }

  return (
    <div
      className={classes.container}
      onClick={handleRefresh}>
      <Image
        className={classes.name}
        src={brettCornick}
        alt="Brett Cornick"
        width={1000}
        height={190}
      />
    </div>
  );
};

export default Banner;
