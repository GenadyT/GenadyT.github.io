import '../ProjectVisual/ProjectVisual.css';


export default function ProjectVisualImage({className, style, src, legend}) {

  return (
    <img className={`project-visual-element project-visual-image ${className}`} 
      style={style} src={`/images/${src}`} alt={legend} />
  )
}