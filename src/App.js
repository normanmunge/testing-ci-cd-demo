// import logo from './logo.svg';
// import "./App.css";
import React, { useEffect, useState } from "react";
import User from "./components/User/User";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <div>
      <h1>Hello World</h1>
      <span data-testid='appDescription'>This is a demo project</span>

      <ul className='test-tools'>
        <li>Jest</li>
        <li>React Testing Library</li>
        <li>Jest Dom</li>
        <li>Es Lint</li>
        <li>Prettier</li>
      </ul>

      <h2>User Profile:</h2>
      {user ? <User user={user} /> : <span>Loading...</span>}
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
