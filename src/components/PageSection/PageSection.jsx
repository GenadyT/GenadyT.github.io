import './PageSection.css';
import clsx from 'clsx';


export default function PageSection({className, title, children}) {


  return (
    <section className={clsx('page-section', className)}>
      <h2>{title}</h2>
      <div className='page-section-content'>
        {children}
      </div>
    </section>
  )
}