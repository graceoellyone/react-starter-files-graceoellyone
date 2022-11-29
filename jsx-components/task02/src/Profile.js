
/* Add the Profile function here */


function Profile(props){
  
  if (props.name && props.bio){
    
    return <main id="content" role="main" className="base">
     <h1>{props.name}'s React Page</h1>
      <p>Example of react JSX in action</p>
      <h2>{props.bio}</h2>
    </main>

  } else 
  {

    return <main id="content" role="main" className="base">
    <h1>Not Grace's web page</h1>
      <p>Nothing to view here</p>

    </main>

  }
  
}


export default Profile