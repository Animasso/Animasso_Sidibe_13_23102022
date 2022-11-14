import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Error(props) {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="error">
        <div className="numberError">404</div>
        <div className="textError">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div
          className="redirectLink"
          onClick={() => {
            navigate("/");
          }}
        >
          Retourner à la page d'accueil
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
