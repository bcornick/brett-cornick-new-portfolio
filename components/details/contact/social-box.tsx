import Image from 'next/image';
import Link from 'next/link';

import classes from './social-box.module.css';

interface Social {
  title: string;
  address: string;
}

interface SocialBoxProps {
  social: Social;
}

const SocialBox = ({ social }: SocialBoxProps): JSX.Element => {
  return (
    <Link
      href={social.address}
      target="_blank">
      <div className={classes.socialBox}>
        <Image
          className={classes.icon}
          src={`/contact/${social.title}.png`}
          alt={social.title}
          width={50}
          height={50}
        />
      </div>
    </Link>
  );
};

export default SocialBox;
