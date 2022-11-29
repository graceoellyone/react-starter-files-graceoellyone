import React from 'react';

const GadgetList = (props) => { 
  console.log(props);
    const titleStyle = {"fontWeight":"bold", "paddingBottom":"12px"};
      const priceStyle = {"color":"purple", "fontWeight":"bold","fontSize":"1.2em","borderBottom":"1px solid skyblue"}
  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
      <div>
      <h3 style = {titleStyle}>{item.title}</h3>
     <img src = {itemStyle} {item.src} alt={item.title}/>
      <p style= {priceStyle} >{item.price}</p>
     
      </div>
       
      ))}
    </main>
  );
}

export default GadgetList;
