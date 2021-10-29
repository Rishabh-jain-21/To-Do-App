import React, { useState } from "react";
import { TodoLists } from "./TodoLists";
import "./App.css";

const App = () => {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const handleButtonClick = () => {
    setItems((oldItems) => {
      return [...oldItems, InputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("delted");
    setItems((array) => {
      return array.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };

  const handleInputChange = (e) => {
    setInputList(e.target.value);
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 className="top-heading">ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a item"
          onChange={handleInputChange}
          value={InputList}
        />
        <button onClick={handleButtonClick}> + </button>
        <ol>
          {/* <li>{InputList}</li> */}
          {Items.map((elm, index) => {
            return (
              <>
                <TodoLists
                  key={index}
                  id={index}
                  elmem={elm}
                  selectItem={deleteItems}
                />
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
