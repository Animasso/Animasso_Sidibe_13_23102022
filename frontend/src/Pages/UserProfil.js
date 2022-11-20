import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Account from "../components/Account";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../userActions/userAction";
function UserProfil() {
  const { firstName, lastName, userToken } = useSelector(
    (state) => state.userDetails
  );
  const dispatch = useDispatch();
  // console.log("lastName:", lastName);
  // console.log("firstname:", firstName);
  const [edit, setEdit] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const displayEdit = () => {
    setEdit(true);
  };
  const closeEdit = () => {
    setEdit(false);
  };
  const submitEdit = (e) => {
    e.preventDefault();
    dispatch(editUser({ userToken, userFirstName, userLastName }));
    closeEdit();
  };
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        {!edit ? (
          <div className="header">
            <h1 className="welcome">
              Welcome back
              <br />
              {firstName} {lastName}
            </h1>

            <button className="edit-button" onClick={displayEdit}>
              Edit Name
            </button>
          </div>
        ) : (
          <div className="header">
            <h1 className="welcome">
              Welcome back
              <br />
              <input
                type="text"
                name="firsName"
                id="firsName"
                placeholder={firstName}
                onChange={(e) => {
                  setUserFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder={lastName}
                onChange={(e) => {
                  setUserLastName(e.target.value);
                }}
              />
            </h1>
            <button className="edit-button" onClick={submitEdit}>
              Edit
            </button>
          </div>
        )}

        <h2 className="sr-only">Accounts</h2>

        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  );
}

export default UserProfil;
