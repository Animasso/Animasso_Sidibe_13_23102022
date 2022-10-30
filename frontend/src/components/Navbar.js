import logo from "../assets/argentBankLogo.png";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";
function Navbar(props) {
  let navigate = useNavigate();
  return (
    <>
      <nav className="main-nav">
        <div className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
        <div>
          <div
            className="main-nav-item"
            onClick={() => {
              navigate("/login");
            }}
          >
            {/* <FontAwesomeIcon icon={solid("user-circle")} /> */}
            {props.content}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
