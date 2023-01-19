import Image from 'next/image';

import background from '../public/site/background.jpg';
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
          src={background}
          alt="site background"
          placeholder="blur"
          fill
        />
        <Banner />
        <WallPanel />
        <p className={classes.sub}>
          This page was built using Figma & NextJS + Typescript. View the Github
          repo{' '}
          <a
            className={classes.gitlink}
            href="https://github.com/bcornick/brett-cornick-new-portfolio"
            target="_blank"
            rel="noreferrer">
            here
          </a>
          .
        </p>
      </main>
    </>
  );
}
