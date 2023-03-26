import "../styles/nav.css";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <>
    <div className="nav">
        <Link to="/postview" className="postview">
          <span className="one">
            <img src={require('../Images/logo.png')} className='insta-logo' alt="logo" />
            <h1 id="insta-logo">Instaclone</h1>
          </span>
        </Link>

        <Link to="/upload">
            <img src={require('../Images/cam.png')} alt="camera" className="insta-logo" />
        </Link>
      </div>  
      <hr />
    </>
  );
};
export default Nav;
