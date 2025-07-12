export default function ButtonControl({className, type, caption, icon, disabled}) { 

  return (
    <button className={`site-stone-1 site-conrol complex-control ${className}`} type={type} disabled={disabled}>      
      <span className='control-caption'>{caption}</span>
      <span className='control-icon'>{icon}</span>
    </button>
  )
}