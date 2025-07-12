import './Project.css';
import SkillBadge from '../../SkillBadge/SkillBadge.jsx';
import ProjectLinks from '../ProjectLinks/ProjectLinks.jsx';
import ProjectVisual from '../ProjectVisual/ProjectVisual.jsx';
import ProjectDescription from '../ProjectDescription/ProjectDescription.jsx';


export default function Project({data}) {


  return (
    <div className='page-section-item project'>
      <div className='project-left-part'>
        <div className='visual-data-cont'>
          <ProjectVisual projectData={data} />
        </div>
        <div className='project-links-cont'>
          <ProjectLinks links={{gitHub: data.gitHubLink, liveLink: data.liveLink}} />
        </div>
      </div>
      <div className='project-right-part'>
        <section>
          <h3 className='project-title'>{data.title}</h3>
          <div className='data-text project-description'>
            <ProjectDescription projectData={data} />
          </div>
        </section>        
        <section className='tech-stack-sec'>
          <h4 className='tech-stack-title'>Tech Stack:&nbsp;</h4>
            {
              data.techStack.map(tool => {
                return (
                  <SkillBadge skill={tool} />
                )
              })
            }
        </section>
      </div>
    </div>
  )
}