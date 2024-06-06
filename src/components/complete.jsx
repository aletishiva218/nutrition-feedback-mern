import React,{Fragment} from "react";

const Complete = () => {
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
            <div className="congrat-container">
              <h1>Congratulations!</h1>
              <p className="subheading">You have successfully completed the quiz</p>
            </div>
          </div>
        </div>
        </Fragment>
    )
}

export default Complete;