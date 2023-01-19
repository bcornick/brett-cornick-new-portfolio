import SocialBox from '../details/contact/social-box';
import classes from './mobile-content.module.css';

const MobileContent = () => {
  return (
    <div className={classes.socialContainer}>
      <p className={classes.header}>Thanks for visiting my page!</p>
      <p className={classes.subheader}>
        Connect with me through my socials below, and{' '}
        <span>view this page on desktop</span> to see my full portfolio.
      </p>
      <div className={classes.row}>
        <SocialBox
          social={{
            title: 'linkedin',
            address: 'https://www.linkedin.com/in/brettcornick/',
          }}
        />
        <SocialBox
          social={{
            title: 'twitter',
            address: 'https://twitter.com/brett_cornick',
          }}
        />
      </div>
      <div className={classes.row}>
        <SocialBox
          social={{
            title: 'github',
            address: 'https://github.com/bcornick',
          }}
        />
        <SocialBox
          social={{
            title: 'medium',
            address: 'https://medium.com/@brett.cornick',
          }}
        />
      </div>
      <div>
        <a
          className={classes.resume}
          href="/documents/brett-cornick-resume.pdf"
          target="_blank"
          rel="noreferrer">
          Full Resume
        </a>
      </div>
    </div>
  );
};

export default MobileContent;
