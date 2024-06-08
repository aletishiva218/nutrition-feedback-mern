import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Question1and2 = (props) => {
  const { changePage } = props;
  const [submitted,setSubmitted ] = useState(false);
  const useremail = Cookies.get("useremail")

  const [data,setData] = useState({fiber:undefined,carbohydrates:undefined,proteins:undefined,fats:undefined,calcium:undefined})

  const onChange = (event) => {
    const {name,value} = event.target;
    setData(prevObj=>{
      return {
        ...prevObj,
        [name]:value
      }
    }) 
  }

  const submit =async (event) => {
    event.preventDefault()
    setSubmitted(true)
    try{
      const response = await axios.put(`https://nutrition-feedback-api.vercel.app/user/${useremail}`,data)
    }catch(err){
      console.log(err)
    }
    changePage("question1and2","question3and4")
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
                it will help us to understand about the nutrients and its
                awareness.
              </p>
              <p className="bottom-text"> feel free to give your opinion </p>
            </div>
          </main>
          {/* questions and nutrients */}
          <form className="test-container" onSubmit={submit}>
            <div className="test">
              <h1>Test your knowledge</h1>
              <p className="subheading-1">
                Take this quiz to test your knowledge on the nutrients
              </p>
              <div className="question-frame">
                <li className="li-List">
                  <h1 className="nutrients">Carbohydrates</h1>
                  <p className="question">
                    Carbohydrates are useful for losing weight?
                  </p>
                </li>
                <div className="check-Box">
                  <input
                    className="chk-btn"
                    type="radio"
                    name="carbohydrates"
                    id="yes"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="carbohydrates"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Proteins</h1>
                  <p className="question">
                  Proteins are primarily responsible for causing weight gain since they are high in calories ?
                  </p>
                </li>
                <div className="check-Box">
                <input
                    className="chk-btn"
                    type="radio"
                    name="proteins"
                    id="no"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="proteins"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
              
                <li className="li-List">
                  <h1 className="nutrients">Fats</h1>
                  <p className="question">
                  Eating fats always leads to weight gain since they are high in calories ?
                  </p>
                </li>
                <div className="check-Box">
                  <input
                    className="chk-btn"
                    type="radio"
                    name="fats"
                    id="yes"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="fats"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Calcium</h1>
                  <p className="question">
                  Eating foods high in calcium always leads to stronger bones and teeth ?
                  </p>
                </li>
                <div className="check-Box">
                <input
                    className="chk-btn"
                    type="radio"
                    name="calcium"
                    id="no"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="calcium"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Fiber</h1>
                  <p className="question">
                  Consuming foods rich in fiber always results in constipation ?
                  </p>
                </li>
                <div className="check-Box">
                  <input
                    className="chk-btn"
                    type="radio"
                    name="fiber"
                    id="yes"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="fiber"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <main>
              <div />
              <div className="btn-botton">
                <div className="balls">{(submitted)?<Fragment><span className="ball-1"></span><span className="ball-2"></span></Fragment>:null}</div>
                <div className="tot-pages"><span className="curr-page">1</span><span>2</span><span>3</span><span>4</span></div>
                <button className="next btn" type="submit">
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

// const Question3and4 =(props) => {
//   const { changePage } = props;
//   const useremail = Cookies.get("useremail")


//   const [data,setData] = useState({fats:undefined,calcium:undefined})

//   const onChange = (event) => {
//     const {name,value} = event.target;
//     setData(prevObj=>{
//       return {
//         ...prevObj,
//         [name]:value
//       }
//     }) 
//   }

//   const submit =async (event) => {
//     event.preventDefault()
//     try{
//       const response = await axios.put(`https://nutrition-feedback-api.vercel.app/user/${useremail}`,data)
//     }catch(err){
//       console.log(err)
//     }
//     changePage("question3and4","question5and6")
//   }
//   return (
//     <Fragment>
//       <header>
//         <div className="header-container">
//           <div className="nav-brand">
//             <img src="logo/logoheader.png" alt="Image description" />
//           </div>
//         </div>
//       </header>
//       <div className="body-container">
//         <div className="main-container">
//           <main className="question-container">
//             {/* header for left container */}
//             <img src="logo/logoheader.png" alt="Image description" />
//             <div>
//               <h1>Are you familiar with these specific nutrients?</h1>
//               <p className="subheading">
//                 it will help us to understand about the nutrients and its
//                 awareness.
//               </p>
//               <p className="bottom-text"> feel free to give your opinion </p>
//             </div>
//           </main>
//           {/* questions and nutrients */}
//           <form className="test-container" onSubmit={submit}>
//             <div className="test">
//               <h1>Test your knowledge</h1>
//               <p className="subheading-1">
//                 Take this quiz to test your knowledge on the nutrients
//               </p>
//               <div className="question-frame">
//                 <li className="li-List">
//                   <h1 className="nutrients">Fats</h1>
//                   <p className="question">
//                   Eating fats always leads to weight gain since they are high in calories ?
//                   </p>
//                 </li>
//                 <div className="check-Box">
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="fats"
//                     id="yes"
//                     value={true}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="yes">Yes</label>
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="fats"
//                     id="no"
//                     value={false}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//                 <li className="li-List">
//                   <h1 className="nutrients">Calcium</h1>
//                   <p className="question">
//                   Eating foods high in calcium always leads to stronger bones and teeth ?
//                   </p>
//                 </li>
//                 <div className="check-Box">
//                 <input
//                     className="chk-btn"
//                     type="radio"
//                     name="calcium"
//                     id="no"
//                     value={true}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="yes">Yes</label>
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="calcium"
//                     id="no"
//                     value={false}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//               </div>
//             </div>
//             <main>
//               <div />
//               <div className="btn-botton">
//                 <button className="next btn" type="submit">
//                   Next
//                 </button>
//               </div>
//             </main>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// const Question5and6 = (props) => {
//   const { changePage } = props;
//   const useremail = Cookies.get("useremail")


//   const [data,setData] = useState({fiber:undefined,sodium_chloride:undefined})

//   const onChange = (event) => {
//     const {name,value} = event.target;
//     setData(prevObj=>{
//       return {
//         ...prevObj,
//         [name]:value
//       }
//     }) 
//   }

//   const submit =async (event) => {
//     event.preventDefault()
//     try{
//       const response = await axios.put(`https://nutrition-feedback-api.vercel.app/user/${useremail}`,data)
//     }catch(err){
//       console.log(err)
//     }
//     changePage("question5and6","question7and8")
//   }
//   return (
//     <Fragment>
//       <header>
//         <div className="header-container">
//           <div className="nav-brand">
//             <img src="logo/logoheader.png" alt="Image description" />
//           </div>
//         </div>
//       </header>
//       <div className="body-container">
//         <div className="main-container">
//           <main className="question-container">
//             {/* header for left container */}
//             <img src="logo/logoheader.png" alt="Image description" />
//             <div>
//               <h1>Are you familiar with these specific nutrients?</h1>
//               <p className="subheading">
//                 it will help us to understand about the nutrients and its
//                 awareness.
//               </p>
//               <p className="bottom-text"> feel free to give your opinion </p>
//             </div>
//           </main>
//           {/* questions and nutrients */}
//           <form className="test-container" onSubmit={submit}>
//             <div className="test">
//               <h1>Test your knowledge</h1>
//               <p className="subheading-1">
//                 Take this quiz to test your knowledge on the nutrients
//               </p>
//               <div className="question-frame">
//                 <li className="li-List">
//                   <h1 className="nutrients">Fiber</h1>
//                   <p className="question">
//                   Consuming foods rich in fiber always results in constipation ?
//                   </p>
//                 </li>
//                 <div className="check-Box">
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="fiber"
//                     id="yes"
//                     value={true}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="yes">Yes</label>
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="fiber"
//                     id="no"
//                     value={false}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//                 <li className="li-List">
//                   <h1 className="nutrients">Sodium Chloride</h1>
//                   <p className="question">
//                   Sodium Chloride is essential for maintaining proper fluid balance in the body ?
//                   </p>
//                 </li>
//                 <div className="check-Box">
//                 <input
//                     className="chk-btn"
//                     type="radio"
//                     name="sodium_chloride"
//                     id="no"
//                     value={true}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="yes">Yes</label>
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="sodium_chloride"
//                     id="no"
//                     value={false}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//               </div>
//             </div>
//             <main>
//               <div />
//               <div className="btn-botton">
//                 <button className="next btn" type="submit">
//                   Next
//                 </button>
//               </div>
//             </main>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

const Question3and4 = (props) => {
  const { changePage } = props;
  const [submitted,setSubmitted ] = useState(false);
  const useremail = Cookies.get("useremail")


  const [data,setData] = useState({sucralose:undefined,sucrose:undefined,sodium_chloride:undefined,acesulfame_potassium:undefined,monosodium_glutamate:undefined})

  const onChange = (event) => {
    const {name,value} = event.target;
    setData(prevObj=>{
      return {
        ...prevObj,
        [name]:value
      }
    }) 
  }

  const submit =async (event) => {
    setSubmitted(true)
    event.preventDefault()
    try{
      const response = await axios.put(`https://nutrition-feedback-api.vercel.app/user/${useremail}`,data)
    }catch(err){
      console.log(err)
    }
    changePage("question3and4","question5and6")
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
                it will help us to understand about the nutrients and its
                awareness.
              </p>
              <p className="bottom-text"> feel free to give your opinion </p>
            </div>
          </main>
          {/* questions and nutrients */}
          <form className="test-container" onSubmit={submit}>
            <div className="test">
              <h1>Test your knowledge</h1>
              <p className="subheading-1">
                Take this quiz to test your knowledge on the nutrients
              </p>
              <div className="question-frame">
                <li className="li-List">
                  <h1 className="nutrients">Sucralose</h1>
                  <p className="question">
                  Sucralose, often listed as E955, is a natural sweetener derived from plant sources ?
                  </p>
                </li>
                <div className="check-Box">
                  <input
                    className="chk-btn"
                    type="radio"
                    name="sucralose"
                    id="yes"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="sucralose"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Sucrose</h1>
                  <p className="question">
                  Sucrose, commonly known as table sugar, is a naturally occurring carbohydrate found in fruits and vegetables ?
                  </p>
                </li>
                <div className="check-Box">
                <input
                    className="chk-btn"
                    type="radio"
                    name="sucrose"
                    id="no"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="sucrose"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Sodium Chloride</h1>
                  <p className="question">
                  Sodium Chloride is essential for maintaining proper fluid balance in the body ?
                  </p>
                </li>
                <div className="check-Box">
                <input
                    className="chk-btn"
                    type="radio"
                    name="sodium_chloride"
                    id="no"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="sodium_chloride"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Acesulfame Potassium</h1>
                  <p className="question">
                  Acesulfame Potassium, commonly known as Acesulfame-K, is a natural sweetener derived from plant sources ?
                  </p>
                </li>
                <div className="check-Box">
                  <input
                    className="chk-btn"
                    type="radio"
                    name="acesulfame_potassium"
                    id="yes"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="acesulfame_potassium"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Monosodium Glutamate</h1>
                  <p className="question">
                  Monosodium Glutamate (MSG), often vilified for its alleged negative health effects, is a compound that occurs naturally in the human body ?
                  </p>
                </li>
                <div className="check-Box">
                <input
                    className="chk-btn"
                    type="radio"
                    name="monosodium_glutamate"
                    id="no"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="monosodium_glutamate"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <main>
              <div />
              <div className="btn-botton">
              <div class="balls">{(submitted)?<Fragment><span class="ball-1"></span><span class="ball-2"></span></Fragment>:null}</div>
              <div className="tot-pages"><span>1</span><span className="curr-page">2</span><span>3</span><span>4</span></div>
                <button className="next btn" type="submit">
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

// const Question9and10 = (props) => {
//   const { changePage } = props;
//   const useremail = Cookies.get("useremail")


//   const [data,setData] = useState({acesulfame_potassium:undefined,monosodium_glutamate:undefined})

//   const onChange = (event) => {
//     const {name,value} = event.target;
//     setData(prevObj=>{
//       return {
//         ...prevObj,
//         [name]:value
//       }
//     }) 
//   }

//   const submit =async (event) => {
//     event.preventDefault()
//     try{
//       const response = await axios.put(`https://nutrition-feedback-api.vercel.app/user/${useremail}`,data)
//     }catch(err){
//       console.log(err)
//     }
//     changePage("question9and10","question11and12")
//   }
//   return (
//     <Fragment>
//       <header>
//         <div className="header-container">
//           <div className="nav-brand">
//             <img src="logo/logoheader.png" alt="Image description" />
//           </div>
//         </div>
//       </header>
//       <div className="body-container">
//         <div className="main-container">
//           <main className="question-container">
//             {/* header for left container */}
//             <img src="logo/logoheader.png" alt="Image description" />
//             <div>
//               <h1>Are you familiar with these specific nutrients?</h1>
//               <p className="subheading">
//                 it will help us to understand about the nutrients and its
//                 awareness.
//               </p>
//               <p className="bottom-text"> feel free to give your opinion </p>
//             </div>
//           </main>
//           {/* questions and nutrients */}
//           <form className="test-container" onSubmit={submit}>
//             <div className="test">
//               <h1>Test your knowledge</h1>
//               <p className="subheading-1">
//                 Take this quiz to test your knowledge on the nutrients
//               </p>
//               <div className="question-frame">
//                 <li className="li-List">
//                   <h1 className="nutrients">Acesulfame Potassium</h1>
//                   <p className="question">
//                   Acesulfame Potassium, commonly known as Acesulfame-K, is a natural sweetener derived from plant sources ?
//                   </p>
//                 </li>
//                 <div className="check-Box">
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="acesulfame_potassium"
//                     id="yes"
//                     value={true}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="yes">Yes</label>
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="acesulfame_potassium"
//                     id="no"
//                     value={false}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//                 <li className="li-List">
//                   <h1 className="nutrients">Monosodium Glutamate</h1>
//                   <p className="question">
//                   Monosodium Glutamate (MSG), often vilified for its alleged negative health effects, is a compound that occurs naturally in the human body ?
//                   </p>
//                 </li>
//                 <div className="check-Box">
//                 <input
//                     className="chk-btn"
//                     type="radio"
//                     name="monosodium_glutamate"
//                     id="no"
//                     value={true}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="yes">Yes</label>
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="monosodium_glutamate"
//                     id="no"
//                     value={false}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//               </div>
//             </div>
//             <main>
//               <div />
//               <div className="btn-botton">
//                 <button className="next btn" type="submit">
//                   Next
//                 </button>
//               </div>
//             </main>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

const Question5and6 =(props) => {
  const { changePage } = props;
  const [submitted,setSubmitted ] = useState(false);
  const useremail = Cookies.get("useremail")


  const [data,setData] = useState({corn_syrup:undefined,dextrose:undefined,mannitol:undefined,honey:undefined})

  const onChange = (event) => {
    const {name,value} = event.target;
    setData(prevObj=>{
      return {
        ...prevObj,
        [name]:value
      }
    }) 
  }

  const submit =async (event) => {
    setSubmitted(true)
    event.preventDefault()
    try{
      const response = await axios.put(`https://nutrition-feedback-api.vercel.app/user/${useremail}`,data)
    }catch(err){
      console.log(err)
    }
    changePage("question5and6","opinion")
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
                it will help us to understand about the nutrients and its
                awareness.
              </p>
              <p className="bottom-text"> feel free to give your opinion </p>
            </div>
          </main>
          {/* questions and nutrients */}
          <form className="test-container" onSubmit={submit}>
            <div className="test">
              <h1>Test your knowledge</h1>
              <p className="subheading-1">
                Take this quiz to test your knowledge on the nutrients
              </p>
              <div className="question-frame">
                <li className="li-List">
                  <h1 className="nutrients">Corn Syrup</h1>
                  <p className="question">
                  Corn Syrup, a common sweetener in processed foods, is derived from the starch of corn kernels through a process involving enzymatic hydrolysis ?
                  </p>
                </li>
                <div className="check-Box">
                  <input
                    className="chk-btn"
                    type="radio"
                    name="corn_syrup"
                    id="yes"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="corn_syrup"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Dextrose</h1>
                  <p className="question">
                  Dextrose, also known as glucose, is a type of sugar that is exclusively derived from animal sources ?
                  </p>
                </li>
                <div className="check-Box">
                <input
                    className="chk-btn"
                    type="radio"
                    name="dextrose"
                    id="no"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="dextrose"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Mannitol</h1>
                  <p className="question">
                  Mannitol, commonly utilized as a sugar substitute, is naturally occurring in pineapples and olives ?
                  </p>
                </li>
                <div className="check-Box">
                  <input
                    className="chk-btn"
                    type="radio"
                    name="mannitol"
                    id="yes"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="mannitol"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
                <li className="li-List">
                  <h1 className="nutrients">Honey</h1>
                  <p className="question">
                  Honey is renowned for its natural medicinal properties ,soothing sore throats?
                  </p>
                </li>
                <div className="check-Box">
                <input
                    className="chk-btn"
                    type="radio"
                    name="honey"
                    id="no"
                    value={true}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    className="chk-btn"
                    type="radio"
                    name="honey"
                    id="no"
                    value={false}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <main>
              <div />
              <div className="btn-botton">
              <div class="balls">{(submitted)?<Fragment><span class="ball-1"></span><span class="ball-2"></span></Fragment>:null}</div>
              <div className="tot-pages"><span>1</span><span>2</span><span className="curr-page">3</span><span>4</span></div>
              <button className="next btn" type="submit">
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

// const Question13and14 = (props) => {
//   const { changePage } = props;
//   const useremail = Cookies.get("useremail")


//   const [data,setData] = useState({mannitol:undefined,honey:undefined})

//   const onChange = (event) => {
//     const {name,value} = event.target;
//     setData(prevObj=>{
//       return {
//         ...prevObj,
//         [name]:value
//       }
//     }) 
//   }

//   const submit =async (event) => {
//     event.preventDefault()
//     try{
//       const response = await axios.put(`https://nutrition-feedback-api.vercel.app/user/${useremail}`,data)
//     }catch(err){
//       console.log(err)
//     }
//     changePage("question13and14","opinion")
//   }
//   return (
//     <Fragment>
//       <header>
//         <div className="header-container">
//           <div className="nav-brand">
//             <img src="logo/logoheader.png" alt="Image description" />
//           </div>
//         </div>
//       </header>
//       <div className="body-container">
//         <div className="main-container">
//           <main className="question-container">
//             {/* header for left container */}
//             <img src="logo/logoheader.png" alt="Image description" />
//             <div>
//               <h1>Are you familiar with these specific nutrients?</h1>
//               <p className="subheading">
//                 it will help us to understand about the nutrients and its
//                 awareness.
//               </p>
//               <p className="bottom-text"> feel free to give your opinion </p>
//             </div>
//           </main>
//           {/* questions and nutrients */}
//           <form className="test-container" onSubmit={submit}>
//             <div className="test">
//               <h1>Test your knowledge</h1>
//               <p className="subheading-1">
//                 Take this quiz to test your knowledge on the nutrients
//               </p>
//               <div className="question-frame">
//                 <li className="li-List">
//                   <h1 className="nutrients">Mannitol</h1>
//                   <p className="question">
//                   Mannitol, commonly utilized as a sugar substitute, is naturally occurring in pineapples and olives ?
//                   </p>
//                 </li>
//                 <div className="check-Box">
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="mannitol"
//                     id="yes"
//                     value={true}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="yes">Yes</label>
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="mannitol"
//                     id="no"
//                     value={false}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//                 <li className="li-List">
//                   <h1 className="nutrients">Honey</h1>
//                   <p className="question">
//                   Honey is renowned for its natural medicinal properties ,soothing sore throats?
//                   </p>
//                 </li>
//                 <div className="check-Box">
//                 <input
//                     className="chk-btn"
//                     type="radio"
//                     name="honey"
//                     id="no"
//                     value={true}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="yes">Yes</label>
//                   <input
//                     className="chk-btn"
//                     type="radio"
//                     name="honey"
//                     id="no"
//                     value={false}
//                     onChange={onChange}
//                     required
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//               </div>
//             </div>
//             <main>
//               <div />
//               <div className="btn-botton">
//                 <button className="next btn" type="submit">
//                   Next
//                 </button>
//               </div>
//             </main>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

export {
  Question1and2,
  Question3and4,
  Question5and6
    // Question7and8,
  // Question9and10,
  // Question11and12,
  // Question13and14
};
