import Image from 'next/image';
import { useState } from 'react';

import { SelectionObject } from '../panel/panel-back';
import classes from './option-item.module.css';

interface OptionItemProps {
  image: string;
  imageAlt: string;
  title: string;
  selection: SelectionObject | null;
  handleSelect: (selection: SelectionObject) => void;
  animate: (doneAnimating: boolean) => void;
}

const OptionItem = (props: OptionItemProps): JSX.Element => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  let translateClass;
  switch (props.title) {
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

  function handleClick(): void {
    setIsSelected(true);
    const selectedElement: SelectionObject = {
      image: props.image,
      title: props.title,
      imageAlt: props.imageAlt,
    };
    props.handleSelect(selectedElement);
    setTimeout(() => {
      props.animate(true);
    }, 1000);
  }

  return (
    <div
      className={classes.option}
      onClick={handleClick}>
      <Image
        src={props.image}
        alt={props.imageAlt}
        width={200}
        height={200}
        className={
          isSelected
            ? `${classes.optionIcon} ${classes.transformer} ${translateClass}`
            : classes.optionIcon
        }
      />
      <h3 className={isSelected ? `transparent` : ''}>{props.title}</h3>
    </div>
  );
};

export default OptionItem;
