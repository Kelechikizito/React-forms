import React, { useState } from "react";

function App() {

  const [name, setName] = useState('')
  const [name2, setName2] = useState('')

  function handleChange(event) {
  setName(event.target.value)
  }

  function handleClick(event) {
    setName2(name)


    event.preventDefault();
  }
 
  return (
    <div className="container">
      <h1>Hello {name2}</h1>
      <form onSubmit={handleClick}>
      <input 
      type="text" 
      onChange={handleChange} 
      placeholder="What's your name?" 
      value = {name}
      />
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
