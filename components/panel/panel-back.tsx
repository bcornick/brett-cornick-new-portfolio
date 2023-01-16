import { useState } from 'react';

import OptionGrid from '../options/option-grid';
import FeaturedSelection from '../details/featured-selection';

export interface SelectionObject {
  image: string;
  title: string;
  imageAlt: string;
}

const PanelBack = (): JSX.Element => {
  const [selection, setSelection] = useState<SelectionObject | null>(null);
  const [doneAnimating, setDoneAnimating] = useState<boolean>(false);

  return (
    <>
      {!selection || (selection && !doneAnimating) ? (
        <OptionGrid
          selection={selection}
          handleClick={setSelection}
          animate={setDoneAnimating}
        />
      ) : (
        <FeaturedSelection
          selection={selection}
          clearSelection={setSelection}
          animate={setDoneAnimating}
        />
      )}
    </>
  );
};

export default PanelBack;
