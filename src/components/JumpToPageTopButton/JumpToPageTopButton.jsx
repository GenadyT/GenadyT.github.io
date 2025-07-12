
import styles from './JumpToPageTopButton.module.css';
import { useRef, useEffect } from 'react';

export function scrollToTopOfPage(scrollDelay) {
  const _scrollToTopOfPage = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  setTimeout(
    _scrollToTopOfPage
    , scrollDelay);  
}

export default function JumpToPageTopButton({jumpDelay}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    document.addEventListener('scroll', function (event) {
      if (window.scrollY > 400) {
        buttonRef.current.style.opacity = 1;
      } else {
        buttonRef.current.style.opacity = 0;
      }
    });
  }, []); 

  function handleOnClick(e) {
      e.preventDefault();      
      scrollToTopOfPage(jumpDelay);
  }

  return (
    <a className={`site-stone-1 ${styles.jump_page_to_top_button} no-select`} 
      onClick={(event) => handleOnClick(event)} ref={buttonRef}><i>➔</i></a>
  );
}