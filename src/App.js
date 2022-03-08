import React, { useEffect, useState } from "react";
import User from "./components/User/User";
import OunicIcon from "./components/icons/ounic";

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
      <h1 className='introduction'>Testing / CI - CD (React) Demo</h1>
      <h5 className='topic'>
        Using these tools; <a href='https://jestjs.io/'>Jest</a>,&nbsp;
        <a href='https://testing-library.com/docs/react-testing-library/intro/'>
          React Testing Library&nbsp;
        </a>
        and
        <a href='https://github.com/features/actions'>&nbsp;Github Actions</a>
        (CI/CD)
      </h5>

      <h1 className='introduction'>Test 1</h1>
      <p className='topic'>This a test to see if a text is in the DOM</p>
      <h3>Hello World</h3>

      <h1 className='introduction'>Test 2</h1>
      <p className='topic'>
        This is a test to check a specific number of list items in an ul element
      </p>
      <ul className='test-tools'>
        <li>Jest</li>
        <li>React Testing Library</li>
        <li>Jest Dom</li>
        <li>Es Lint</li>
        <li>Prettier</li>
      </ul>

      <h1 className='introduction'>Test 3</h1>
      <p className='topic'>
        This is a test to check whether a certain component is rendered after an
        asynchronous request
      </p>
      <h2>User Profile:</h2>
      {user ? <User user={user} /> : <span>Loading...</span>}

      {/* <h2>Done demoing the app!</h2> */}
    </>
  );
}

export default App;
