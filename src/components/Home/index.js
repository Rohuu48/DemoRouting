import React, { useState, useEffect, useContext, useCallback } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  //componentdidmount
  useEffect(() => {
    console.log("home component");
  }, []);
  //takes two parameters==>
  // 1)function to be executed
  //2)dependency array--> It calls the useeffect function when there is a change in the variables that are defined in this array.

  //componentwillunmount
  useEffect(() => {
    return () => {
      console.log("home unmounts");
      console.log("home unmounts 1");
    };
  }, []);

  //componentdidupdate
  useEffect(() => {
    console.log(counter, "counter updated");
  }, [counter]);

  return (
    <div>
      <button onClick={increment}>+</button>
      {counter}
      <button>-</button>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
