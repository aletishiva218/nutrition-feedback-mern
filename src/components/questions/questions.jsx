import React,{useState} from "react";
import Question from "./question";

const Questions = () => {
    const [ind,setIndex] = useState(0);
    const [questions,setQuestions]=useState([
        {
          question: "Carbohydrates are useful for losing weight?",
          key:"carbohydrates",
          value:undefined
        },
        {
          question: "Proteins are primarily responsible for causing weight gain since they are high in calories ?",
          key:"protiens",
          value:undefined
        },
        {
          question: "Eating fats always leads to weight gain since they are high in calories ?",
          key:"fats",
          value:undefined
        },
        {
          question: "Eating foods high in calcium always leads to stronger bones and teeth ?",
          key:"calcium",
          value:undefined
        },
        {
          question: "Consuming foods rich in fiber always results in constipation ?",
          key:"fiber",
          value:undefined
        },
        {
          question: "Sodium Chloride is essential for maintaining proper fluid balance in the body ?",
          key:"sodium_chloride",
          value:undefined
        },
        {
          question: "Sucralose, often listed as E955, is a natural sweetener derived from plant sources ?",
          key:"sucralose",
          value:undefined
        },
        {
          question: "Sucrose, commonly known as table sugar, is a naturally occurring carbohydrate found in fruits and vegetables ?",
          key:"sucrose",
          value:undefined
        },
        {
          question: "Acesulfame Potassium, commonly known as Acesulfame-K, is a natural sweetener derived from plant sources ?",
          key:"acesulfame_potassium",
          value:undefined
        },
        {
          question: "Monosodium Glutamate (MSG), often vilified for its alleged negative health effects, is a compound that occurs naturally in the human body ?",
          key:"monosodium_glutamate",
          value:undefined
        },
        {
          question: "Corn Syrup, a common sweetener in processed foods, is derived from the starch of corn kernels through a process involving enzymatic hydrolysis ?",
          key:"corn_syrup",
          value:undefined
        },
        {
          question: "Dextrose, also known as glucose, is a type of sugar that is exclusively derived from animal sources ?",
          key:"dextrose",
          value:undefined
        },
        {
          question: "Mannitol, commonly utilized as a sugar substitute, is naturally occurring in pineapples and olives ?",
          key:"mannitol",
          value:undefined
        },
        {
          question: "Honey is renowned for its natural medicinal properties ,soothing sore throats?",
          key:"honey",
          value:undefined
        }
      ]);

      const onChange=(event) => {
        const [name,value] = event.target;
        console.log(name,value)
      }

      const next = (event) => {
        event.preventDefault();
        setIndex(ind+2);
      }

      return <Question title1={questions[ind].key} title2={questions[ind+1].key} question1={questions[ind].question} question2={questions[ind+1].question} next={next} onChange={onChange}/>;
}

export default Questions;