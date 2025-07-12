const env = process.env;

const PersonalInfo = {
  aboutMe: env.REACT_APP_AboutMe?.replace(/\\n/g, '\n'),

  /*aboutMeLong: `
    <p></p>
  `,*/  

  proficSpecializations: ["Software Engineer", "Full-Stack Developer", "Thoughtful Problem-Solver", "Versatile Developer"],

  socialLinks: {
    gitHub: env.REACT_APP_SocialLinks_GitHub,
    facebook: env.REACT_APP_SocialLinks_Facebook,
    instagram: env.REACT_APP_SocialLinks_Instagram,
    twitter: env.REACT_APP_SocialLinks_Twitter,
    linkedIn: env.REACT_APP_SocialLinks_LinkedIn,
  },

  contactPreface: `
    <h3>
      Let’s Build Something Great Together <span class="smile">😉</span>
    </h3>
  `,

  contactInfo: {
    location: env.REACT_APP_ContactInfo_Location,
    email: env.REACT_APP_ContactInfo_Email,
    phone: env.REACT_APP_ContactInfo_Phone
  }
};

export default PersonalInfo;