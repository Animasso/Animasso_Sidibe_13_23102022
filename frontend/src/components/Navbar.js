import logo from "../assets/argentBankLogo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { getUserProfile } from "../userActions/userAction";

const Navbar = () => {
  let navigate = useNavigate();
  // const { token } = useSelector((state) => state.login);
  const { userInfo, userToken } = useSelector((state) => state.login);
  console.log("tok:", userToken);
  console.log("userInfo:", userInfo);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  useEffect(() => {
    if (userToken) {
      dispatch(getUserProfile());
    }
  }, [userToken, dispatch]);

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
          {!userInfo ? (
            <div
              className="main-nav-item"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </div>
          ) : (
            <div
              className="main-nav-item"
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              Log out
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
