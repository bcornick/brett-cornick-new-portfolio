import classes from './page-icon.module.css';

interface PageIconProps {
  id: number;
  isSelected: boolean;
  handleClick: (page: number) => void;
}

const PageIcon = (props: PageIconProps): JSX.Element => {
  function getSelected() {
    props.handleClick(props.id);
  }
  return (
    <>
      <div
        className={
          props.isSelected ? `${classes.page} ${classes.current}` : classes.page
        }
        onClick={getSelected}></div>
    </>
  );
};

export default PageIcon;
