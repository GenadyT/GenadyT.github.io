import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const SocialLinks = ({links, dir}) => {
  const icons = [
    { icon: <FaGithub />, url: links.gitHub },
    { icon: <FaLinkedinIn />, url: links.linkedIn },
    { icon: <FaFacebookF />, url: links.facebook },
    { icon: <FaInstagram />, url: links.instagram },
    { icon: <FaTwitter />, url: links.twitter },
  ];

  return (
    <div style={{ display: 'flex', gap: '15px', justifyContent: dir }}>
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
          className='site-stone-1 sites-link'
        >
          {item.icon}
        </a>
        
      ))}
    </div>
  );
};

export default SocialLinks;
