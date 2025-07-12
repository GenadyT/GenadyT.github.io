import './Experience.css';
import SkillBadge from "../../SkillBadge/SkillBadge";


export default function Experience({experience}) {


  return (
    <div className="page-section-item experience">
      <div className="experience-row position-row">
        <h3 className="position">{experience.position}</h3>
        <div className="experience-years">
          <span className="date from-date">{experience.fromDate}</span> - 
          <span className="date to-date">{experience.toDate}</span>
        </div>
      </div>
      <div className="experience-row company-row">
        <span className="company">{experience.company}</span>
      </div>
      <div className="data-text experience-row duties-row">
        <ul className="duties-ul">
          {
            experience.duties.map((duty) => {
              return (
                <li key={`duty${duty.length}`}>
                  <p className="duty">{duty}</p>
                </li>
              )
            })
          }
        </ul>        
      </div>
      <section className='tech-stack-sec'>
        <h4 className='tech-stack-title'>Tech Stack:&nbsp;</h4>
          {
            experience.skills.map((skill) => {
              return (
                <SkillBadge skill={skill} />
            )
          })
        }
      </section>
    </div>
  )
}