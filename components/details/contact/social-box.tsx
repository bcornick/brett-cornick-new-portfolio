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
          placeholder="blur"
          blurDataURL={`/contact/${social.title}.png`}
          width={80}
          height={80}
        />
      </div>
    </Link>
  );
};

export default SocialBox;
