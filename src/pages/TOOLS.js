import "./css/Tools.css";
import { ReactComponent as Bucket } from "../static_Asset/icons/iconmonstr-github-5.svg";
import { ReactComponent as CssIcon } from "../static_Asset/icons/css3-alt-brands.svg";
import { ReactComponent as DockerIcon } from "../static_Asset/icons/docker-brands.svg";
import { ReactComponent as FigmaIcon } from "../static_Asset/icons/figma-brands.svg";
import { ReactComponent as GitlabIcon } from "../static_Asset/icons/gitlab-brands.svg";
import { ReactComponent as HTMLIcon } from "../static_Asset/icons/html5-brands.svg";
import { ReactComponent as JavascriptIcon } from "../static_Asset/icons/js-square-brands.svg";
import { ReactComponent as PythonIcon } from "../static_Asset/icons/python-brands.svg";
import { ReactComponent as ReactIcon } from "../static_Asset/icons/react-brands.svg";
const Tools = () => {
  return (
    <>
      <div className="icon-bars">
        <div className="github-svg">
          <Bucket />
        </div>
        <div className="github-svg">
          <CssIcon />
        </div>
        <div className="github-svg">
          <DockerIcon />
        </div>
        <div className="github-svg">
          <FigmaIcon />
        </div>
        <div className="github-svg">
          <GitlabIcon />
        </div>
        <div className="github-svg">
          <HTMLIcon />
        </div>
        <div className="github-svg">
          <JavascriptIcon />
        </div>
        <div className="github-svg">
          <PythonIcon />
        </div>
        <div className="github-svg">
          <ReactIcon />
        </div>
      </div>
    </>
  );
};

export default Tools;
