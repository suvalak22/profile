import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App() {
  return (
    <>
      <div className = 'card'>
        <div className='data'>

        </div>
      </div>
    </>
  )
}

function Avatar() {
  return <img className='avatar' scr="IMG_3104.jpg" alt='My Avatar'/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

