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
        width={2000}
        height={200}
      />
    </div>
  );
};

export default Banner;
