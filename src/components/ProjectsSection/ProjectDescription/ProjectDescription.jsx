import './ProjectDescription.css';
import ProjectDescriptionParagraphs from './ProjectDescriptionParagraphs.jsx';
import ProjectDescriptionString from './ProjectDescriptionString.jsx';


export default function ProjectDescription({projectData}) {  
  var descript;

  if ('descriptionParagraphs' in projectData) {
    descript = <ProjectDescriptionParagraphs paragraphs={projectData.descriptionParagraphs} />
  } else {
    descript = <ProjectDescriptionString description={projectData.description} />
  }

  return descript;
}