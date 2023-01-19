import SocialBox from './social-box';
import classes from './contact-page.module.css';

const socialArray = [
  {
    title: 'linkedin',
    address: 'https://www.linkedin.com/in/brettcornick/',
  },
  {
    title: 'twitter',
    address: 'https://twitter.com/brett_cornick',
  },
  {
    title: 'github',
    address: 'https://github.com/bcornick',
  },
  {
    title: 'medium',
    address: 'https://medium.com/@brett.cornick',
  },
];

const ContactPage = (): JSX.Element => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.socialsContainer}>
        {socialArray.map((social, i) => (
          <SocialBox
            key={i}
            social={social}
          />
        ))}
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
