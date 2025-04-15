import './main.css';
import statestore from '../zustandprovide/provide';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

function Main() {
  const [input, setInput] = useState('');
const [calculate,setcalculate]= useState(0);
  const [priornumber, setPriorNumber] = useState(0);

  const prior = statestore((state) => state.priority);
  const addprio = statestore((state) => state.addpriority);
const addpasser = statestore((state)=>state.addpasser)
const passer = statestore((state)=>state.passer);
//const setindexs= statestore((state)=>state.setindex);

  //const indexnumber= statestore((state)=>state.indexnum);
//  const deleteindex=(index:number)=>{
// prior.splice(index,1)
//  }
// const removeindex=()=>{

//   console.log(indexnumber);
  
// }

const calculatetotal=()=>{
  let total:number = 0;
  prior.map((item) => (
  
total+=item.priorityno

            ))
           
  console.log(total);

      const calculated:number = (passer/total)*100 ;  
      console.log(calculated)  
setcalculate(Math.round(calculated));

}

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addprio({
      task: input,
      priorityno: priornumber, 
     });

    setInput('');
    setPriorNumber(0);

    setTimeout(() => {
      console.log('Updated priority list:', statestore.getState().priority);
    }, 100);
  };
  

  return (
    <>
   
    <div className='container'>
      <div>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={calculate} />
   
    </Stack>
    </div>
      <div className="header">
        <div  className='input1'>     
        <input
       
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Task name"
        />
        </div>
        <div    className='input2'>
        <input
           
          
          onChange={(e) => setPriorNumber(Number(e.target.value))}
          placeholder="Priority number"
        />
        </div>
        <div className="btn1">
        <button  onClick={handleSubmit}>
          Ad
        </button>
        </div>
      </div>

      <div className="priority-list">
<div  className='tasks'>

         {prior.map((item,index) => (
  
<div key={index} className='indtask'>
            Task: {item.task}  | Priority No: {item.priorityno } 
            <button onClick={()=>{
             addpasser(item.priorityno)
            }}>Complete </button> 
            <button className='btn2'> x</button>
             
          </div>
          
        ))}
        </div>
     <div>
    <div>{passer}</div>
   
    <div>{calculate}</div>
     </div>
     <button onClick={calculatetotal}>completed</button>
      </div>
    
      </div>
    </>
    
  );
}

export default Main;
