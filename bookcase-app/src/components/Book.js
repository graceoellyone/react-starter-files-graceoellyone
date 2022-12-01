import React from 'react';


//import PropTypes from 'prop-types'; 


function Book({book:{ id,
  saleInfo: {retailPrice}, 
  volumeInfo: { 
  title, 
  authors, 
  description, 
  imageLinks: {thumbnail}
    }}}) {

      const handleClick = () => {
        console.log ('I am in the click handler') 
      };
      function addBook(title) {

        console.log (`The Book ${title}  was clicked`)
        
        
        }

  return (
    
    
    <div className="book">
    <img src={thumbnail} alt={title}/>
     <div>
     <h2 title={title}>{title}</h2>
     {retailPrice && <p>£{retailPrice.amount}</p>}
     {authors && <p>{authors.join(', ')}</p>}
     {description && <p>{description}</p>}
     <button type="button" onClick= {() =>addBook(title)}>
     
        Click Me
      </button>
     </div>
    </div>);


  
 
     
  


}
export default Book;