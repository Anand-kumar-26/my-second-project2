import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Index extends React.Component {
  render() {
    return (
      <>
        <App/>
      </>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);
