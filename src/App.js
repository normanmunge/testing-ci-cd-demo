// import logo from './logo.svg';
// import "./App.css";
import React, { useEffect, useState } from "react";
import User from "./components/User/User";
import OunicIcon from "./components/icons/ounic";
import styles from "./index.css";

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
    <>
      <OunicIcon height='20rem' width='20rem' />
      <h1 className={styles.introduction}>Testing / CI - CD (React) Demo</h1>
      <h5 className={styles.topic}>
        Using Jest and React Testing Library and Github Actions{" "}
      </h5>

      <h1 className={styles.underline}>Test 1</h1>
      <p className={styles.description}>
        This a test to see if a text is in the DOM
      </p>
      <h3>Hello World</h3>
      <span data-testid='appDescription'>This is a demo project</span>

      <br></br>
      <h1 className={styles.underline}>Test 2</h1>
      <p className={styles.description}>
        This a test to check a specific number of list items in an ul element
      </p>
      <ul className='test-tools'>
        <li>Jest</li>
        <li>React Testing Library</li>
        <li>Jest Dom</li>
        <li>Es Lint</li>
        <li>Prettier</li>
      </ul>

      <h1 className={styles.underline}>Test 3</h1>
      <p className={styles.description}>
        This a test to check whether a certain component is rendered after an
        asynchronous request
      </p>
      <h2>User Profile:</h2>
      {user ? <User user={user} /> : <span>Loading...</span>}
    </>
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
