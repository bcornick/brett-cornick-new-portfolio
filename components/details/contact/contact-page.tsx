import SocialBox from './social-box';
import socials from '../../../content/socials';
import classes from './contact-page.module.css';

const ContactPage = (): JSX.Element => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.socialsContainer}>
        {socials.map((social, i) => (
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
