import styles from './SiteFooter.module.css';


export default function SiteFooter({gitHubLink, portfolioProjectLink}) {

  return (
    <>
    <footer>
      Made with <span className={`${styles.love}`}>&nbsp;💖&nbsp;</span>
      using&nbsp;<span className={`${styles.open_source}`}>React</span>
      <span className={`${styles.footer_bullet}`}>&#8226;</span>
      <a className={`${styles.open_source} ${styles.open_source_on_gitHub}`} href={process.env.REACT_APP_GitHub_Portfolio} 
        target="_blank" style={{textDecoration: "none"}}>Open Source on GitHub</a>
      <span className={`${styles.footer_bullet}`}>&#8226;</span>
      <span className={`${styles.copyright}`}>© {new Date().getFullYear()} {process.env.REACT_APP_My_Name}</span>      
    </footer>
    </>
  )

}