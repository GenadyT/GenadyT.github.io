import { MdOutlineMail } from 'react-icons/md';
import ButtonControl from '../../ButtonControl/ButtonControl.jsx';


export default function SendMessageButton({disabled}) {
  const icon = <MdOutlineMail />;

  return (
    <ButtonControl className="send-message-button" type="submit" 
        caption="Send Message" icon={icon} disabled={disabled} />
  )
}