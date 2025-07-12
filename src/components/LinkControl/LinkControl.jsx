export default function LinkControl({className, caption, icon, href}) {

  return (
    <a className={`site-stone-1 site-conrol complex-control ${className}`} href={href} target="_blank" rel="">      
      <span className='control-caption'>{caption}</span>
      <span className='control-icon'>{icon}</span>
    </a>
  )
}