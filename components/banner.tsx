import Image from 'next/image';
import { useRouter } from 'next/router';

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
        src="/site/brett-cornick.png"
        alt="Brett Cornick"
        width={1000}
        height={190}
        placeholder="blur"
        blurDataURL="/site/brett-cornick.png"
      />
    </div>
  );
};

export default Banner;
