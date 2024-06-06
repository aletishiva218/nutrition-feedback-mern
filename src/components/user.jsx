import React, { Fragment, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Spinner from "./Loading Component/Spinner";

const User = (props) => {
  const { changePage } = props;
  const [user, setUser] = useState({ username: "", useremail: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((prevObj) => {
      return {
        ...prevObj,
        [name]: value
      };
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post("https://nutrition-feedback-api.vercel.app/user",user)
    }catch(err){
      console.log(err)
    }
    Cookies.set("useremail",user.useremail)
    changePage("user","question1and2");
  };
  return (
    <Fragment>
      <header>
        <div className="header-container">
          <div className="nav-brand">
            <img src="logo/logoheader.png" alt="Image description" />
          </div>
        </div>
      </header>
      <div className="body-container">
        <div className="main-container">
          <main className="question-container">
            {/* header for left container */}
            <img src="logo/logoheader.png" alt="Image description" />
            <div>
              <h1>Are you familiar with these specific nutrients?</h1>
              <p className="subheading">
                it will help us to understand about the nutrients and its
                awareness.
              </p>
              <p className="bottom-text"> feel free to give your opinion </p>
            </div>
          </main>
          {/* questions and nutrients */}
          <form className="test-container" onSubmit={onSubmit}>
            <div className="test">
              <h1>Test your knowledge</h1>
              <p className="subheading-1">
                Take this quiz to test your knowledge on the nutrients
              </p>  
              <div className="user-data">
                <label htmlFor="yes">username</label>
                <input
                  type="text"
                  name="username"
                  onChange={onChange}
                  required
                />
                <label htmlFor="yes">email</label>
                <input
                  type="email"
                  name="useremail"
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <main>
              <div />
              <div className="btn-botton">
                <button className="next btn" type="submit">
                  {" "}
                  Next
                </button>
              </div>
            </main>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
