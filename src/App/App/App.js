import React, { useState, useEffect } from 'react';
import SiteLoader from '../SiteLoader/SiteLoader.jsx';
import { Element, Events, scrollSpy } from 'react-scroll';
import './App.css';
import SiteHeader from '../../../src/components/SiteHeader/SiteHeader.jsx';
import HelloSection from '../../../src/components/HelloSection/HelloSection';
import ExperienceSection from '../../../src/components/ExperienceSection/ExperienceSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection/ProjectsSection.jsx';
import OpenSourceSection from '../../components/ProjectsSection/OpenSourceSection/OpenSourceSection.jsx';
import ContactSection from '../../../src/components/ContactSection/ContactSection';
import SiteFooter from '../../../src/components/SiteFooter/SiteFooter';
import PersonalInfo from '../../data/personal-info.js';
import JumpToPageTopButton from '../../components/JumpToPageTopButton/JumpToPageTopButton.jsx';


const ScrollPageUpDelay = process.env.REACT_APP_PAGE_SCROLL_UP_DELAY;
export function getScrollPageUpDelay() {
  return ScrollPageUpDelay;
}


function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 5000);  // 6000 2000

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');

      clearTimeout(timer);
    };
  }, []);


  return (
    <div>
      {isLoading ? (
        <SiteLoader />
      ) : (
      <>
        <SiteHeader />        
        <Element name="about">
            <HelloSection proficSpecializations={PersonalInfo.proficSpecializations} about={PersonalInfo.aboutMe} />  
        </Element>
        <main>
          <Element name="experience">
            <ExperienceSection />  
          </Element>
          <Element name="projects">
            <ProjectsSection />  
          </Element>
          <Element name="openSource">
            <OpenSourceSection />  
          </Element>          
          <Element name="contact">
            <ContactSection />
          </Element>
        </main>
        <SiteFooter gitHubLink={PersonalInfo.socialLinks.gitHub} portfolioProjectLink={``} />
      </>        
      )}
      <JumpToPageTopButton jumpDelay={getScrollPageUpDelay()} />
    </div>    
  );
}

export default App;
