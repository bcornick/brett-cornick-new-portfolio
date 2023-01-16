import Image from 'next/image';
import { useState, useEffect } from 'react';

import ItemDetails from './item-details';
import ContactPage from './contact/contact-page';
import classes from './featured-selection.module.css';

interface FeaturedSelectionProps {
  selection: {
    title: string;
    image: string;
    imageAlt: string;
  };
  clearSelection: (selection: null) => void;
  animate: (doneAnimating: boolean) => void;
}

const FeaturedSelection = (props: FeaturedSelectionProps): JSX.Element => {
  const [fadeReady, setFadeReady] = useState<boolean>(false);
  const [goingBack, setGoingBack] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeReady(true);
    }, 1);
  }, []);

  let translateClass;
  switch (props.selection.title) {
    case 'Skills':
      translateClass = classes.translate1;
      break;
    case 'Interests':
      translateClass = classes.translate2;
      break;
    case 'Experience':
      translateClass = classes.translate3;
      break;
    case 'Contact':
      translateClass = classes.translate4;
      break;
    default:
      translateClass = '';
  }

  function handleBack(): void {
    setFadeReady(false);
    setGoingBack(true);
    setTimeout(() => {
      props.clearSelection(null);
      props.animate(false);
    }, 1000);
  }

  return (
    <div className={classes.featuredSection}>
      <div className={classes.icon}>
        <div>
          <Image
            src={props.selection.image}
            alt={props.selection.imageAlt}
            width={200}
            height={200}
            className={
              !goingBack
                ? classes.iconModel
                : `${classes.iconModel} ${translateClass}`
            }
          />
          <h3
            className={fadeReady ? `${classes.title} visible` : classes.title}>
            {props.selection.title}
          </h3>
        </div>
        <button
          className={fadeReady ? `${classes.backBtn} visible` : classes.backBtn}
          onClick={handleBack}>
          Back
        </button>
      </div>
      <div
        className={fadeReady ? `${classes.content} visible` : classes.content}>
        {props.selection.title === 'Contact' ? (
          <ContactPage />
        ) : (
          <ItemDetails page={props.selection.title} />
        )}
      </div>
    </div>
  );
};

export default FeaturedSelection;
