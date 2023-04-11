import React ,{useState}from 'react'
import './TaskOne.css';
function TaskOne() {

const [counter,setCounter] = useState(0);
const [isClicked,setIsClicked]= useState(false);

const handleClick = () =>{
    setCounter(counter +1);
    setIsClicked(true);
}

  return (
    <center>
    <div className='square'>

        <div className='circle'
         style={{    backgroundColor: isClicked ? ' skyblue' : 'yellow'
        }}
        >
            {counter}
           
        </div>
      
    </div>
    <button className='btn' onClick={handleClick}>Change color</button>
    </center>
  )
}

export default TaskOne;
