import React from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

// App function

function App() {
  //  useState to get each element from input
  const [value, setValue] = React.useState("");
  // useState to set element to array
  const [element, setElement] = React.useState([]);

  //  function to render list of item
  function listElement(vale, myId) {
    return <List key={myId} Id={myId} value={vale} onChecked={deleteItem} />;
  }

  // function to delete item from array
  function deleteItem(id) {
    setElement((prevalue) => {
      return prevalue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  //  function to set input to setvalue
  function inputChange(event) {
    setValue(event.target.value);
  }
  //  function to handle form submit
  function handleChange(event) {
    setElement([...element, value]);
    event.preventDefault();
  }
  //  returning element
  return (
    <div className="container">
      <Header />
      <Form
        InputValue={inputChange}
        Name="product"
        Change={handleChange}
        Form="form"
      />
      {element.map(listElement)}
    </div>
  );
}

export default App;
