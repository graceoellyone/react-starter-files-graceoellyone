import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
//import data from './models/headphones.json';

import GadgetList from './components/GadgetList';
import ClickCounter from './components/ClickCounter';
const mainStyle = {"fontFamily":"Georgia"};

const App = () => {
  const headphones =  [{"title":"Headphones 1", "price": 29.99},{"title":"Headphones 2", "price": 39.99},
  {"title":"Headphones 3", "price": 49.99},{"title":"Headphones 4", "price": 59.99},{"title":"Headphones 5", "price": 69.99},];
  const [headphonesList] = useState(headphones);

  return <section style={mainStyle}>
    <h1>Detoro Electronics Store</h1>
    <GadgetList items={headphonesList}/>
    <ClickCounter/>
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
