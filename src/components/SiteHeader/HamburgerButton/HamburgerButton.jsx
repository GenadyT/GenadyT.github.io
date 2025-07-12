import './HamburgerButton.css';
import { Squash as Hamburger } from 'hamburger-react';


const HamburgerButton = ({className, isOpen, toggleHandler}) => {  

  function onToggle() {
    const newState = isOpen ? false : true;
    toggleHandler(newState);
  }

  return (
    <div className={className}>
      <Hamburger className={className} size="28" toggled={isOpen} toggle={onToggle} />
    </div>    
  )
};

export default HamburgerButton;