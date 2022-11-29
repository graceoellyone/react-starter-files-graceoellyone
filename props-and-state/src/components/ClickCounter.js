import React,  {useState} from 'react';
//import React,  { useState, useEffect} from 'react';
const ClickCounter = () => { 
    const clickStyle = {"marginTop":"10px","fontWeight":"bold","cursor":"pointer", "fontSize":"1.1em", "paddingBottom": "12px 17px",
    "backgroundColor": "black",}
      const unclickStyle = {"float":"right", "magingTop":"10px","fontWeight":"bold","cursor":"pointer","fontSize":"1.2em", "padding": "12px 17px"
      ,"backgroundColour":"black",}

      //const [count, setCount, useEffect] = useState(0);
      const [count, setCount, ] = useState(0);
      //useEffect(() => {
        //const timeout = setTimeout(() => {
           //setCount(1);
        // }, 0);
       //},[]);
      return(

        <div>
      <h2>Count: {count}</h2>
     <div>Click the button below to increment the counter</div>
      <button stlye={clickStyle} onClick={() => setCount(count +1)}>Click!</button>
     <button style= {unclickStyle}onClick={() => count > 0 && setCount(count - 1) }>Click!</button>
      </div>
      );
      }

export default ClickCounter; 