import './ExperienceSection.css';
import PageSection from '../PageSection/PageSection.jsx';
import ExperienceData from '../../data/experience.js';
import Experience from './Experience/Experience.jsx';


export default function ExperienceSection({}) {

  return (
    <PageSection className="experience-section" title="Experience">
      <ul className='page-section-ul'>
        {
          ExperienceData.map((experience) => {
            return (
              <li key={experience.company}>
                <Experience experience={experience} />
              </li>              
            )
          })          
        }
      </ul>      
    </PageSection>
  )
}