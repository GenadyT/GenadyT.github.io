import './ProjectDescription.css';
import { itemIdent } from '../../../utils.js';
 

const paragDescription = (parag) => {
  if ("description" in parag ) {
    return <span>{`${parag.description}`}</span>
  } else {
    return parag.links.map((link, index) => {
      return (
        <>
          <a className='parag-description-link' href={link.href} target='_blank'>{link.caption}</a>
          {(( parag.links.length - 1) > index) &&
            <span className=''>,&nbsp;</span>
          }
        </>        
      )
    })
  }
}


export default function ProjectDescriptionParagraphs({paragraphs, ident}) {
  

  return (
    <div className='project-description-paragraphs'>
      {
        paragraphs.map((parag, index) => 
          <p key={`${itemIdent(parag.title)}_${index}`}>
            <span className='project-description-paragraph-title'>{`${parag.title}`}</span>
            <span style={{textDecoration: 'none'}}>:</span>
            &nbsp;
            {paragDescription(parag)}            
          </p>
        )
      }      
    </div>
  )
}