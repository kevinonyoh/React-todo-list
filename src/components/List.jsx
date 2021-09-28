import React from "react";

function List(props) {
  return (
    <div onClick={()=>{
      props.onChecked(props.Id)
      // to handle delete 
    }}>
      <ul>
        <li>{props.value}</li>
      </ul>
    </div>
  );
}

export default List;
