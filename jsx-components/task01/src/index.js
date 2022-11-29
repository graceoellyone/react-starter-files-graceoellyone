import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Grace';
const MY_NAME = 'GRACE'

function Profile(name){
  //function Profile(){
  if(name.toUpperCase() === MY_NAME.toUpperCase()){
    
    return <main id="content" role="main" className="base">
    <h1>{name}'s React Page</h1>
      <p>Example of react JSX in action</p>
    </main>

  } else //(name !== "")
  {

    return <main id="content" role="main" className="base">
    <h1>Not Grace's web page</h1>
      <p>Nothing to view here</p>
    </main>


  }
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile(name));
//root.render(Profile());
