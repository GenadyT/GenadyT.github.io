import './LocEmCall.css';
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import SocialLinks from '../../SocialLinks/SocialLinks.jsx';


export default function LocEmCall({contactInfo, socialLinks}) {
  const icons = [
    { icon: <MdLocationPin />, text: contactInfo.location },
    { icon: <MdOutlineEmail />, text: contactInfo.email },
    { icon: <HiMiniDevicePhoneMobile />, text: contactInfo.phone },
  ];


  return (
    <div className='loc-em-call'>
      <ul>
        {icons.map((item, index) => (
          <li key={index}>
            <div className='loc-em-call-item'>
              <span              
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  fontSize: '20px'
                }}
                className='contact-icon'
              >
                {item.icon}
              </span>
              <p className='contact-text'>
                {item.text}
              </p>
            </div>            
          </li>          
      ))}
      </ul>
      <hr className='links-delimiter'></hr>
      <SocialLinks links={socialLinks} dir="left" />
    </div>
  )
}