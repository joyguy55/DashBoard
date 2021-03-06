import React from 'react';
import './questions_container.scss';
// import { Link } from 'react-router-dom'

const questions = [
  { title: 'title1'},
  { title: 'title2'},
  { title: 'title3'},
  { title: 'title1'},
  { title: 'title2'},
  { title: 'title3'},
]

const QuestionsContainer = (props) => {
  return (
    <div className="question_box">
     <div className="question_list">SECTION</div>
      {
        props.questions.map((question)=>{
          return(
            <div className="box">
              <article className="media">
                <div className="check_box"></div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      {question.name}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          );
        })
      }
   </div>
  );
}

export default QuestionsContainer;
