import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';
// import reportWebVitals from './reportWebVitals';
function Test()
{
  const [movieStars, setMovieStars]= useState(0);
  return <div>
    <StarRating color="blue" maxRating={7} onSetRating ={setMovieStars} />
    <p>The Movie has rated {movieStars} Stars </p>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} messeges ={['Terrible','Bad','Okay','good','Excellent']}/>
    <StarRating />
    <StarRating size={24} maxRating={10} className='text' defaultRating ={3}/>
    <Test/> */}
    <App/>
    {/* we can also pass css class like that  */}
    {/* <StarRating maxRating={10} />
    <StarRating  /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
