import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './libs/css/font-awesome.min.css';
import './libs/css/owl.carousel.min.css';
// import './libs/js/jquery.js';
// import './libs/js/progressbar.js';
// import './libs/js/custom.js';
// import './libs/js/owl.carousel.min.js';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Main(){
  const [topScroll,setTopScroll] = useState(false);

  const handleScroll = (e)=>{
    setTopScroll(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[]);

  return(
    <React.StrictMode>
      <App scrollTop={topScroll}/>
    </React.StrictMode>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
