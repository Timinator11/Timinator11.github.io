import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AlwaysOpenExample from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1>US Wildfire Information & Visualization</h1>
    <p>Welcome to the Kalamazoo College COMP484/490 wildfire visualization project.</p>
    <AlwaysOpenExample />
    <iframe src="https://editor.giscloud.com/rest/1/maps/2480793/render.iframe?bound=-33382801.985154662,-10566654.790142741,33421937.74363667,20468001.68609131&toolbar=true&popups=true&layerlist=true&search=true" 
         width="100%" height="600" frameborder="0"></iframe>
    <p>Souces: <br></br>
    https://www.doi.gov/blog/10-tips-prevent-wildfires<br></br>
    https://earth.org/what-causes-wildfires/<br></br>
    https://hazards.fema.gov/nri/map<br></br>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
