import Model from "./componens/model/Model.js";
import Jatekter from "./componens/Jatekter";
import React, { useState } from 'react';
import "./App.css";

const lmodel = new Model()

function App() {
  const [list, setAllapot] = useState([...lmodel.getList()]);


  function katt(index) {
    console.log(index);
    lmodel.setAllapot(index)
    setAllapot([...lmodel.getList()])
    //lmodel.setSzomszed(index)
    //setSzomszed([...lmodel.getList()])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>LIGHTON</h1>
      </header>
      <article>
        <Jatekter katt={katt} lista={list} />
      </article>
    </div>
  );
}

export default App;
