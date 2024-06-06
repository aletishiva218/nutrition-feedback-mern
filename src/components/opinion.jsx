import React,{Fragment,useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Opinion = (props) => {
  const { changePage } = props;
  const useremail = Cookies.get("useremail")

  const [data,setData] = useState({opinion:""})

  const onChange = (event) => {
    const {value} = event.target;
    setData({opinion:value}) 
  }

  const submit =async (event) => {
    event.preventDefault()
    try{
      const response = await axios.put(`https://nutrition-feedback-api.vercel.app/user/${useremail}`,data)
    }catch(err){
      console.log(err)
    }
    changePage("opinion","complete")
  }
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
              it will help us to understand  about the nutrients and its awareness.
            </p>
            <p className="bottom-text"> feel free to give your opinion </p>
          </div>
        </main>
        {/* questions and nutrients */}
        <form className="test-container" onSubmit={submit}>
          <div className="test">
            <h1>Test your knowledge</h1>
            <p className="subheading-1">Take this quiz to test your knowledge on the nutrients</p>
            <div className="textArea-container">
                        <textarea className="text-opinion" name="opinion" id="opinion" onChange={onChange} required placeholder="share your opinion about test here...">
</textarea>
                </div>
          </div>
          <main>
            <div />
            <div className="btn-botton">
              {/* <button className="previous btn ">previous </button> */}
              <button className="next btn" type="submit"> Next</button>
            </div>
          </main>
        </form>
      </div>
    </div>
    </Fragment>
    )
}

export default Opinion;