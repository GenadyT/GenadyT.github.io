import { RxExternalLink } from 'react-icons/rx';
import LinkControl from '../LinkControl/LinkControl.jsx'; 


export default function ResumeButton({}) {
  const icon = <RxExternalLink />;
  const href = process.env.REACT_APP_CV_HREF;


  return (
    <LinkControl className="resume-link" caption="Resume" icon={icon} href={href} />
  )
}