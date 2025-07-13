import './SiteHeader.css';
import { Link, scrollSpy  } from 'react-scroll';
import { useEffect, useState } from 'react';
import SiteLogo from '../SiteLogo/SiteLogo';
import HamburgerButton from './HamburgerButton/HamburgerButton'; 
import ResumeButton from '../ResumeButton';


const siteHeaderOffset = 170; /* site header offset */

export default function SiteHeader() {   
  const [open, setOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();

    const mediaQuery = window.matchMedia("(max-width: 900px)"); //768px
    const handleResize = () => setOpen(!mediaQuery.matches);

    // Set initial value
    handleResize();

    // Add event listener
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  function onHamburgerToggle(isOpen) {
    setOpen(isOpen);
  }

  return (
    <header className="site-header fixed-header">
      <div className="sub-nav logo-nav">
          <Link className="menu-link" to="about" smooth={true} offset={-siteHeaderOffset} duration={500}>
            <SiteLogo size="small" shimmered={false}/>
          </Link>
        </div>
      <nav className="nav">        
        <div className={`sub-nav menu-nav ${open ? 'open' : ''}`}>
          <ul className='menu-links-list'>
            <li key="siteHeaderMenuLink_About">
              <span className='menu-link-cont'>
                <Link className="menu-link" to="about" spy={true} smooth={true} offset={-siteHeaderOffset} duration={500} activeClass="menu-link-active">About</Link>
              </span>              
            </li>
            <li key="siteHeaderMenuLink_Experience">
              <span className='menu-link-cont'>
                <Link className="menu-link" to="experience" spy={true} smooth={true} offset={-siteHeaderOffset} duration={500} activeClass="menu-link-active">Experience</Link>
              </span>              
            </li>
            <li key="siteHeaderMenuLink_Projects">
              <span className='menu-link-cont'>
                <Link className="menu-link" to="projects" spy={true} smooth={true} offset={-siteHeaderOffset} duration={500} activeClass="menu-link-active">Projects</Link>
              </span>              
            </li>
            <li key="siteHeaderMenuLink_OpenSource">
              <span className='menu-link-cont'>
                <Link className="menu-link" to="openSource" spy={true} smooth={true} offset={-siteHeaderOffset} duration={500} activeClass="menu-link-active">Open Source</Link>
              </span>              
            </li>            
            <li key="siteHeaderMenuLink_Contact">
              <span className='menu-link-cont'>
                <Link className="menu-link" to="contact" spy={true} smooth={true} offset={-siteHeaderOffset} duration={500} activeClass="menu-link-active">Contact</Link>
              </span>              
            </li>
            <li key="siteHeaderMenuLink_Resume">
              <ResumeButton />
            </li>
          </ul>
        </div>
        <HamburgerButton className="hamburger-button" isOpen={open} toggleHandler={onHamburgerToggle} />
      </nav>
    </header>
  )
}