import PageSection from '../../PageSection/PageSection.jsx';
import Project from '../Project/Project.jsx';
import Projects from '../../../data/projects.js';


export default function ProjectsSection({}) {  


  return (
    <PageSection className="projects-section" title="Commercial Projects">
      <ul className='page-section-ul'>
        {
          Projects.map(prj => {
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