import * as React from 'react';

import './test.css';
import ProductPage from './ProductPage.js';


export default function Test(){
  const [isDark, setIsDark] = React.useState(false);

  const [count, setCount] = React.useState(0);
  const [timestamp, setTimestamp] = React.useState(Date.now());

  React.useEffect(() => {
    document.title = `You clicked ${count} times`;

    var updatedTimeElement = document.getElementById('updated-time');
    if (updatedTimeElement) {
      var lastModified = new Date(document.lastModified);
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      updatedTimeElement.innerText = lastModified.toLocaleDateString('en-US', options);
    }
  }, [count]);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setTimestamp(Date.now());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>Current timestamp: {new Date(timestamp).toUTCString()}</p>
      </div>

      <p>Last updated on: <span id="updated-time"></span></p>

    </>
  );
}

/*

*/
