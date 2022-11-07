import React from "react";
import Footer from "../components/Footer";
import FormSignin from "../components/FormSignin";
import Navbar from "../components/Navbar";

function Signin(props) {
  return (
    <div>
      <Navbar />
      <FormSignin />
      <Footer />
    </div>
  );
}

export default Signin;
