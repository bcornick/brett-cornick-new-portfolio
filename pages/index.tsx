import Image from 'next/image';

import Banner from '../components/banner';
import WallPanel from '../components/panel/wall-panel';
import SiteHeader from '../components/site-header';
import classes from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className={classes.main}>
        <Image
          className={classes.bgImage}
          src="/site/background.jpg"
          alt="site background"
          placeholder="blur"
          blurDataURL="/site/background.jpg"
          fill
        />
        <Banner />
        <WallPanel />
      </main>
    </>
  );
}
