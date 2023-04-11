import React from 'react'

function CompB(props) {

  const {cendol, setCendol} = props;

  const handleClick = () =>{
    setCendol(()=>cendol + 10)
  }
  return (
    <div>
      <h5>enter the value : {cendol}</h5>
      <button onClick={handleClick}>increment  + 10 </button>
      
    </div>
  )
}

export default CompB;
