import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Culinary Heirlooms
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="playstore" />
        <img src={assets.app_store} alt="appstore" />
      </div>
    </div>
  );
};

export default AppDownload;
