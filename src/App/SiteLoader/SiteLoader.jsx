import './SiteLoader.css';
import SiteLogo from "../../components/SiteLogo/SiteLogo"


export default function SiteLoader() {

  return (
    <div className="site-loader">
      <SiteLogo size="large" shimmered={true} />
    </div>
  )
}