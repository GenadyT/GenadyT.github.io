import './AboutSection.css';
import PageSection from '../PageSection/PageSection.jsx';
import PersonalInfo from '../../data/personal-info.js';
import HtmlContent from '../HtmlContent.jsx';


export default function AboutSection({}) {


  return (
    <PageSection className="about-section" title="About Me">
      <HtmlContent htmlString={PersonalInfo.aboutMeLong} className="paragraph-1st" />
    </PageSection>
  )
}