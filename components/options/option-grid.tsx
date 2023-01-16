import { useEffect, useState } from 'react';

import OptionItem from './option-item';
import { SelectionObject } from '../panel/panel-back';
import classes from './option-grid.module.css';

interface OptionGridProps {
  selection: SelectionObject | null;
  handleClick: (selection: SelectionObject) => void;
  animate: (doneAnimating: boolean) => void;
}

const OptionGrid = (props: OptionGridProps): JSX.Element => {
  const [fadeReady, setFadeReady] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setFadeReady(true);
    }, 1);
  }, []);

  return (
    <>
      <div className={fadeReady ? 'visible' : classes.outerBox}>
        <div
          className={
            props.selection && props.selection.title !== 'Skills'
              ? 'transparent'
              : ''
          }>
          <OptionItem
            image="/site/tetrahedron.png"
            imageAlt="tetrahedron"
            title="Skills"
            selection={props.selection}
            handleSelect={props.handleClick}
            animate={props.animate}
          />
        </div>
        <div
          className={
            props.selection && props.selection.title !== 'Experience'
              ? 'transparent'
              : ''
          }>
          <OptionItem
            image="/site/glob.png"
            imageAlt="glob"
            title="Experience"
            selection={props.selection}
            handleSelect={props.handleClick}
            animate={props.animate}
          />
        </div>
      </div>
      <div className={fadeReady ? 'visible' : classes.outerBox}>
        <div
          className={
            props.selection && props.selection.title !== 'Interests'
              ? 'transparent'
              : ''
          }>
          <OptionItem
            image="/site/pill.png"
            imageAlt="pill"
            title="Interests"
            selection={props.selection}
            handleSelect={props.handleClick}
            animate={props.animate}
          />
        </div>
        <div
          className={
            props.selection && props.selection.title !== 'Contact'
              ? 'transparent'
              : ''
          }>
          <OptionItem
            image="/site/donut.png"
            imageAlt="donut"
            title="Contact"
            selection={props.selection}
            handleSelect={props.handleClick}
            animate={props.animate}
          />
        </div>
      </div>
    </>
  );
};

export default OptionGrid;
