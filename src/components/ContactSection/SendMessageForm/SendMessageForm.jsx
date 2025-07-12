import './SendMessageForm.css';
import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import SendMessageButton from '../SendMessageButton/SendMessageButton.jsx';


export default function SendMessageForm() {
  const [state, handleSubmit] = useForm("xwpbyjyb");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    finished: true
  });
  const thanksRef = useRef();
  const formRef = useRef();  
    
  useEffect(() => {
    thanksRef.current.style.display = 'none';
  }, []);

  // Reset form after success
  if (state.succeeded && !formData.finished) {    
    thanksRef.current.style.display = 'block';
    formRef.current.style.display = 'none';
    setTimeout(() => {
      thanksRef.current.style.display = 'none';
      formRef.current.style.display = 'block';
      setFormData({ name: '', email: '', message: '', finished: true }); 
    },
    2000); // Small delay to prevent glitch
  }

  const handleChange = (e) => {
    setFormData((prev) => {
      const result = { ...prev, [e.target.name]: e.target.value };
      result.finished = false;
      return result;
    });
  };


  return (
    <div className='send-message-form'>
      <p className='thanks' ref={thanksRef}>Thanks for joining!</p>
      <div className='email-form-cont' ref={formRef}>
        <form className='email-form' action={process.env.REACT_APP_Email_Form_Action} 
            onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}>
          <div className='row name-email-row'>
            <div className="field">
              <label htmlFor="name" className='field-label'>
                Your Name
              </label>
              <input className='field-input' id="name" type="name" name="name" onChange={handleChange} value={formData.name} required />
            </div>
            <div className="field">
              <label htmlFor="email" className='field-label'>
                Your Email
              </label>
              <input className='field-input' id="email" type="email" name="email" onChange={handleChange} value={formData.email} required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>          
          </div>        
          <div className="row">
            <div className="field">
              <label htmlFor="message" className='field-label'>
                Message
              </label>      
              <textarea className='field-input field-message' id="message" name="message" onChange={handleChange} value={formData.message} required />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>            
          </div>
          <div className="row" style={{justifyContent: 'center'}}>
            <SendMessageButton className='form-submit-btn' type="submit" caption="Send Message" disabled={state.submitting} />
          </div>
        </form>  
      </div>      
    </div>    
  );
}