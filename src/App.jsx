import React, { useState } from "react";
import Loading from "./components/loading";
import User from "./components/user";
import {
    Question1and2,
    Question3and4,
    Question5and6
  //   Question7and8,
  //   Question9and10,
  // Question11and12,
  // Question13and14
} from "./components/questions/question";
import Opinion from "./components/opinion";
import MaxWidthDialong from "./components/complete";

const App = () => {
  const [pages, setPage] = useState({
    loading: true,
    user: false,
    question1and2: false,
    question3and4: false,
    question5and6: false,
    // question7and8: false,
    // question9and10: false,
    // question11and12: false,
    // question13and14: false,
    opinion: false,
    complete: false
  });

  setTimeout(() => {
    setPage((obj) => {
      return {
        ...obj,
        loading: false,
        user: true,
      };
    });
  }, 3000);

  const changePage = (prevPage,nextPage) => {
    setPage((obj) => {
        return {
          ...obj,
          [prevPage]: false,
          [nextPage]: true
        };
      });
  }
  if (pages.complete) return <MaxWidthDialong />;
  else if (pages.opinion) return <Opinion changePage={changePage}/>;
  // else if (pages.question13and14) return <Question13and14 changePage={changePage} />;
  // else if (pages.question11and12) return <Question11and12 changePage={changePage} />;
  // else if (pages.question9and10) return <Question9and10 changePage={changePage} />;
  // else if (pages.question7and8) return <Question7and8 changePage={changePage }/>;
  else if (pages.question5and6) return <Question5and6 changePage={changePage} />;
  else if (pages.question3and4) return <Question3and4 changePage={changePage} />;
  else if (pages.question1and2) return <Question1and2 changePage={changePage} />;
  else if (pages.user) return <User changePage={changePage}/>;
  else if (pages.loading) return <Loading changePage={changePage}/>;
};

export default App;
