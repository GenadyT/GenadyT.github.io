import './ProjectVisual.css';
import ProjectVisualCarousel from '../ProjectVisualCarousel/ProjectVisualCarousel';
import ProjectVisualImage from '../ProjectVisualImage/ProjectVisualImage';


export default function ProjectVisual({projectData}) {  
  const isSlides = ('slides' in projectData) ? true : false;
  var visual;
  if (isSlides) {
    visual = <ProjectVisualCarousel slides={projectData.slides} />;
  } else {
    visual = <ProjectVisualImage className="" style={projectData.imageStyle} src={projectData.imageSrc} legend={projectData.name} />;
  }

  return (
    <>
      {visual}
    </>
  )
}