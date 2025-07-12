import clsx from 'clsx';


export default function ProjectGitHubReadMe({data}) {


  return (
    <section className={clsx('page-section', className)}>
      <h2>{title}</h2>
      <div className='page-section-content'>
        {children}
      </div>
    </section>
  )
}