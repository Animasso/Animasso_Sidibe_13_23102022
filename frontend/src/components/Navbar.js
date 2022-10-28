import logo from "../assets/argentBankLogo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";
function Navbar(props) {
  return (
    <>
      <nav class="main-nav">
        <div class="main-nav-logo">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </div>
        <div>
          <div class="main-nav-item">
            {/* <FontAwesomeIcon icon={solid("user-circle")} /> */}
            Sign In
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
