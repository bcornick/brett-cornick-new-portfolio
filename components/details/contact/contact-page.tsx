import SocialBox from './social-box';
import classes from './contact-page.module.css';

const ContactPage = (): JSX.Element => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.socialsContainer}>
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

export default ContactPage;
