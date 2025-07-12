import './ContactSection.css';
import PageSection from '../PageSection/PageSection.jsx';
import LocEmCall from './LocEmCall/LocEmCall.jsx';
import PersonalInfo from '../../data/personal-info.js';
import SendMessageForm from './SendMessageForm/SendMessageForm.jsx';
import HtmlContent from '../HtmlContent.jsx';


export default function ContactSection({}) {


  return (
    <PageSection className="contact-section" title="Contact">
      <div>                
        <div className='contact-header'>
          <HtmlContent htmlString={PersonalInfo.contactPreface} className="" />
        </div>          
        
        <div className="row contact-all-parts">

          <div className="align-items-stretch page-section-item contact-left-part">
            <LocEmCall contactInfo={PersonalInfo.contactInfo} socialLinks={PersonalInfo.socialLinks} 
              phone={PersonalInfo.contactInfo.phone} />            
          </div>

          <div className="align-items-stretch page-section-item contact-right-part">
            <SendMessageForm />
          </div>

        </div>
      </div>
    </PageSection>
  )
}