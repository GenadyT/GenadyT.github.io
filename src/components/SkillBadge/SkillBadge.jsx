import skillColors from './skill-design.js';
import styled from 'styled-components';


function SkillStyle(foreColor, backgroundColor) {
  this.foreColor = foreColor;
  this.backgroundColor = backgroundColor;
}


export default function SkillBadge({skill}) {
  const skillDesign = skillColors(skill);

  const Skill = styled.span`
    color: ${skillDesign.foreColor};
    background-color: ${skillDesign.backgroundColor};
    border-radius: 5px;
    padding: 2px 5px 0px 5px;
    margin: 0.15rem 0.4rem;
    white-space: nowrap;
    font-weight: bold;
    font-size: 12.2px;
    height: 17px;
    font-family: 'Inter-V', sans-serif;
  `;

  return (
    <Skill>
      {skill}        
    </Skill>
  )
}