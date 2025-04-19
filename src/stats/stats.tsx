import './stats.css';
import { useState } from 'react';
import { Gauge ,gaugeClasses} from '@mui/x-charts/Gauge';
import Stack from '@mui/material/Stack';
import statestore from '../zustandprovide/provide';
function Stats(){
  const settings = {
    width: 150,
    height: 150,
    value: 60,
  };
  const [calculate,setcalculate]= useState(0);
    const prior = statestore((state) => state.priority);
    const addpasser = statestore((state)=>state.addpasser);
    const passer = statestore((state)=>state.passer);
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
    
    
    
  return(
    <>
    <div className='stats'>
<div className='piarates'>
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
    </div>




      <h1><span className='span'>Statistics</span> bar</h1>
      <p>Track your daily doing with comprehensive statistics</p>
<div  className='piecharts '>









</div>






      <div className='yourtask'>

      {prior.map((item,index) => (
  
  <div key={index} className='savedtsks'>
    <div>
              Task: {item.task}  | Priority No: {item.priorityno } 
              </div>
              <div> 
              <button onClick={()=>{
          addpasser(item.priorityno)
         }}>Complete </button>
            </div>
        </div>
       
          ))}
      </div>
      <div>
        <h1>{calculate}</h1>
    <button onClick={calculatetotal}>calculate</button>
      </div>
    </div>
    </>
  )
}
export default Stats;