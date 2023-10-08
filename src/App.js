import React, { useState } from 'react'




const App = () => {
  const [allFormData,setAllFormData]=useState([])
const[formData,setFormData]=useState(
  {
    name:"",
    department:"",
    rating:""
  }
);
const handleChange=(event)=>{
  setFormData({...formData,[event.target.name]:event.target.value})
  // console.log(formData)
}

  return (
    <div>
      <h1 style={{fontFamily:'cursive'}}>EMPLOYEE FEEDBACK FORM</h1>
      <form action=''>
        <label> Name: <input type='text' name="name"  onChange={handleChange} ></input></label> <br/><br/>
        <label> Department: <input type='text' name="department" onChange={handleChange}></input></label> <br/><br/>
        <label> Rating: <input type='number' name="rating" onChange={handleChange} ></input></label> <br/> <br/>
        


        <button 
        type='button'
        onClick={(e)=>{
          
          const tempObj=[...allFormData];
          tempObj.push(formData)
          setAllFormData(tempObj)
          console.log("all form data",allFormData)

          }}>Submit</button>
      </form>
      <br/> <br/>
      <div className='Container'>
      {
        allFormData.map(
          (value,index)=>{
            return(
              <div className='Child' key={index}>Name:{value.name}| Department:{value.department} |Rating:{value.rating}</div>
            )

          }
        )
      }

      </div>
      
    </div>
  );
}

export default App;
