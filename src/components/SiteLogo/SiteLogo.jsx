import './SiteLogo.css';


function SiteLogo({size, shimmered}) {
  var logoSize, logoBorderWidth;
  
  switch(size) {
    case "small":
      logoSize = 45;
      logoBorderWidth = 2;
      break;
    case "medium":
      logoSize = 55;
      logoBorderWidth = 3;
      break;
    case "large":
      logoSize = 75;
      logoBorderWidth = 3;
      break;
    default:
      logoSize = 55;
      logoBorderWidth = 3;
  }

  const logoStyle = { width: `${logoSize}px`, height: `${logoSize}px`, borderWidth: `${logoBorderWidth}px`};
  const symbolFontSize = (logoSize * 0.6).toFixed(1);
  

  return (
    <div className={`site-stone-1 site-logo ${ shimmered ? 'shimmered' : '' }`} style={logoStyle}>
      <span className='logo-symbol' style={{fontSize: `${symbolFontSize}px`}}>G</span>
    </div>
  );
}

export default SiteLogo;
