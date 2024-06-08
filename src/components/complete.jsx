import * as React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';


const MaxWidthDialog =  (props) => {
  const [user,setUser] = React.useState({})
  const [answers,setAnswers] = React.useState([]);
  const [totalcorrectanswer,setTotalcorrectAnswers] = React.useState(0);
  const [show,setShow] = React.useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false])
  const useremail = Cookies.get("useremail");
  React.useEffect( ()=>{
    const getData = async () => {
      try{
        const response = await axios.get(`https://nutrition-feedback-api.vercel.app/user/${useremail}`)
        setUser(response.data)
        setAnswers(response.data.answers);
        let answers = response.data.answers;
        answers = answers.filter(answer=>answer.given==answer.correct)
        setTotalcorrectAnswers(answers.length)
      }catch(err){
        console.log(err)
      }
    }
    getData()
  },[useremail])

  const onToggle = (ind) => {
    setShow(show=>{
      return show.map((sh,ind1)=>{
        if(ind1==ind)
          return !sh;
        return sh;
      })
    })
  }

  return (
    <React.Fragment>
       <header>
          <div className="header-container">
            <div className="nav-brand">
              <img src="logo/logoheader.png" alt="Image description" />
            </div>
          </div>
        </header>
        <div className="body-container-con">
          <div className="main-container-1">
            <div className="congrat-container">
              <h1>Congratulations!</h1>
              <p className="subheading">You have successfully completed the quiz</p>
              {/* new code for results */}
              {/*/////////////////////////////////////////////////////////  */}
              <div className="loading-Container"> 
                {/* user */}
                <div className="user-ans-detail">
                  <div className="user-info-container">
                    <div className="logo-user">
                      {/* only first letter of username e.g om so the letter o will display */}
                      <p>{(user.username)?user.username.split("")[0].toUpperCase():""}</p>
                    </div>
                    <div className="user-text-info">
                      <p className="user-name">{user.username}</p>
                      <p className="user-email">{user.useremail}</p>
                    </div>
                  </div>
                  {answers.map((answer,ind)=>
                      <div className={(show[ind])?"user-anwsr-singleton open":"user-anwsr-singleton"} key={ind}>
                    <div className="user-ans-single">
                      <p>Q{ind+1}</p>
                      <p>{answer.question}</p>
                      {/* user given answer */}
                      {/* use isred for wrong answer */}
                      <p className="isgreen">{answer.given}</p>
                    </div>  
                    <div className="arrow-btn" onClick={()=>onToggle(ind)}>
                      <img src="logo/arrow.svg" alt="arrow" />
                    </div>
                    <div className="main-container-expand isgreen"> 
                      <h1 className="statement">
                        This statement is <span className="primary-color-statement">{answer.correct}</span>
                      </h1>
                      <p className="description">description:</p>
                      <p className="desc-dist">{answer.description}</p>
                    </div>
                    <div className="bottom-border" />
                  </div>
                  )}
                </div>
                {/* marks */}
                <div className="left-container">
                  <div className="marks">
                    <div className="outer-circle">
                      <div className="inner-circle">
                        <p>{Math.round((totalcorrectanswer/14)*100)}%</p>
                      </div>
                    </div>   
                    <div className="number">
                      <h1>{totalcorrectanswer} / 14</h1>
                      <p>points</p>
                    </div>
                  </div>
                  <div className="dev-data">
                    <h1>Developers</h1>
                    <div className="divider" />
                    <div className="dev-info">
                      <div className="dev-logo">
                        <p>Om Jamnekar (App Dev)</p>
                      </div>
                      <div className="dev-links">
                        <a href="https://github.com/omjamnekar"><div className="back-image-dev"><img className="logo-dev" src="logo/github.png" alt="GitHub" /></div></a>
                        <a href="https://www.linkedin.com/in/om-jamnekar-961aa5256/"><div className="back-image-dev"><img className="logo-dev" src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.pngg" alt="Image description" /></div></a>
                      </div>
                    </div>
                    <div className="divider-2" />
                    <div className="dev-info">
                      <div className="dev-logo">
                        <p>Shiva Aleti (Web Dev)</p>
                      </div>
                      <div className="dev-links">
                        <a href="https://github.com/aletishiva218"><div className="back-image-dev"><img className="logo-dev" src="logo/github.png" alt="GitHub" /></div></a>
                        <a href="https://www.linkedin.com/in/shiva-aleti-b06443237/"><div className="back-image-dev"><img className="logo-dev" src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.pngg" alt="Image description" /></div></a>
                      </div>
                    </div>
                  </div>
                  <div className="dev-data">
                    <h1>Project</h1>
                    <div className="divider" />
                    <p className="mystatement">Thank you so much for your assistance with this mini-project. It is a crucial part of our research, we use this research in further development and we truly appreciate your support.</p>
                  </div>
                  <div className="dev-data">
                    <h1>connect us</h1>
                    <div className="divider" />
                    <p className="app-shower">you can follow us with our project</p>
                    <a href="https://github.com/aletishiva218/nutrition-feedback-mern/tree/main">open source code</a>              </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </React.Fragment>
  );
}

export default MaxWidthDialog;