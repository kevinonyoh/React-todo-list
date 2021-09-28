import React from "react";

function Form(props) {
  return (
    <div className={props.Form}>
      <form onSubmit={props.Change}>
        <input name={props.Name} onChange={props.InputValue} type="text" />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
