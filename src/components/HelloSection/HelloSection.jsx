import './HelloSection.css';
import RunningTextString from '../RunningTextString/RunningTextString.jsx';
import HtmlContent from '../HtmlContent.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import PersonalInfo from '../../data/personal-info.js';


export default function HelloSection({proficSpecializations, about}) {
  

  return (
    <div className="full-screen-height hello-section">
      <div className='hello-sub-section'>
        <div className='sec left-sec'>
          <div className='sec-sec hi-iam-sec-sec'>
            <h1>
              <span className='hi-i-am'>Hi, I am</span><br/>
              <span className="my-name">Gennady Turkot,</span>
            </h1>
            <div className="typing">
              <h2 className='profic-specializations'>
                <span className="typing-text noselect">
                  <RunningTextString stringArray={proficSpecializations} />
                </span>
              </h2>
            </div>
          </div>
          <div className='text-first sec-sec short-about-sec-sec'>
            <HtmlContent htmlString={about} className="paragraph-1st" />
          </div>
        </div>
        <div className='sec right-sec'>
          <div className='sec-sec portrait-sec-sec'>
            <img  className='portrait welcome-portrait' src={ process.env.PUBLIC_URL + '/images/my-portrait.jpg' } />
          </div>
          <div className='sec-sec contacten-sec-sec' style={{paddingLeft: '12px'}}>
            <SocialLinks links={PersonalInfo.socialLinks} dir="center" />
          </div>
        </div>
      </div>      
    </div>
  )
}