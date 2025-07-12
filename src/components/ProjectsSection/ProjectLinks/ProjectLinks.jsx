import './ProjectLinks.css';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';


const ProjectLinks = ({links}) => {
  const icons = [];

  if (links.gitHub) {
    icons.push({ icon: <FaGithub />, url: links.gitHub })
  }
  if (links.liveLink) {
    icons.push({ icon: <BiLinkExternal />, url: links.liveLink })
  }


  return (
    <div className='project-links'>
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            textDecoration: 'none',
            fontSize: '20px'
          }}
          className='site-stone-1 project-link'
        >
          {item.icon}
        </a>
        
      ))}
    </div>
  );
};

export default ProjectLinks;
