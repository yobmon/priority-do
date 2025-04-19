import './main.css';
import statestore from '../zustandprovide/provide';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Gauge ,gaugeClasses} from '@mui/x-charts/Gauge';

const settings = {
  width: 200,
  height: 200,
  value: 60,
};

function Main() {
  const [input, setInput] = useState('');
const [calculate,setcalculate]= useState(0);
  const [priornumber, setPriorNumber] = useState(0);
 //const [indexer,setindexer]= useState(0);



 

  const prior = statestore((state) => state.priority);
  const addprio = statestore((state) => state.addpriority);
//const addpasser = statestore((state)=>state.addpasser)
const passer = statestore((state)=>state.passer);
//const setindexer= statestore((state)=>state.setindex);

  //const indexnumber= statestore((state)=>state.indexnum);
 const deleteindex=(index:number)=>{
  const newlist=prior.filter((item,ind)=>ind!==index)
  statestore.setState({priority:newlist});
  }
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
      <div  className='pies'>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 } }>
      <Gauge  {...settings}
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#FFA500',
        },
        [`& .${gaugeClasses.valueText} text`]: {
          fill: "#3b82f6" // <-- change text color
        },
      })}
      
      value={calculate}
        />
   
    </Stack>
    </div>
      <div className="header">
   <div  className='input1'>
     
        <input
       
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Task name"
          required/>

        </div>
        <div    className='input2'>

        <input
           
          
          onChange={(e) => setPriorNumber(Number(e.target.value))}
          placeholder="Priority number"
          required/>
        </div>
   
        <div className="btn1">
        <button  onClick={handleSubmit}>
          Add
        </button>
        </div>
      </div>

      <div className="priority-list">
<div  className='tasks'>

         {prior.map((item,index) => (
  
<div key={index} className='indtask'>
            Task:<span className='span1'>{item.task} </span>      | <span> Priority No:</span>   <span  className='span1'>{item.priorityno } </span> 
            {/* <button onClick={()=>{
             addpasser(item.priorityno)
            }}>Complete </button>  */}
          
         
            <button className='btn2' onClick={()=>{
              deleteindex(index)}}> x</button>
             
          </div>
          
        ))}
        </div>
        <div className='totals'>
     <div>
    {/* <div>{passer}</div>
   
    <div>{calculate}</div> */}
     </div>
     <button onClick={calculatetotal}>Saved</button>
  
      </div>

      </div>
      </div>
    </>
    
  );
}

export default Main;
