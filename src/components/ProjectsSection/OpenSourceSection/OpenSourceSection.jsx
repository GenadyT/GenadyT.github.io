import PageSection from '../../PageSection/PageSection.jsx';
import Project from '../Project/Project.jsx';
import Miscellaneous from '../../../data/open-sources/miscellaneous.js';
import DesignPatterns from '../../../data/open-sources/design-patterns.js';


export default function OpenSourceSection({}) {


  return (
    <PageSection className="projects-section open-source-section" title="Open Source Projects">
      <ul className='page-section-ul'>
        {
          Miscellaneous.map(prj => {
            return (
              <li key={prj.title.replace(" ", "")}>
                <Project data={prj} />                  
              </li>
            )
          })
        }
      </ul>      
      <br/>
      <ul className='page-section-ul'>
        {
          DesignPatterns.map(prj => {
            return (
              <li key={prj.title.replace(" ", "")}>
                <Project data={prj} />                  
              </li>
            )
          })
        }
      </ul>      
    </PageSection>
  )
}