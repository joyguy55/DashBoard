import React from 'react';
import './form.scss';

const Form = (props) => {
  return (
    <div className="form">

      <p>This is your question african or euoropean?</p>

      <div className="field  radios">
        <div className="control">
          <label className="radio first">
            <input type="radio" name="question"/>
            Yes
          </label>
          <label className="radio">
            <input type="radio" name="question"/>
            No
          </label>
        </div>
      </div>

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input"/>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-info">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link">Cancel</button>
        </div>
      </div>
   </div>
  );
}

export default Form
