import './header.css';
import statestore from '../zustandprovide/provide';
import { useState } from 'react';

function Header() {
  const [input, setInput] = useState('');

  const [priornumber, setPriorNumber] = useState(0);

  const prior = statestore((state) => state.priority);
  const addprio = statestore((state) => state.addpriority);
  const addpasser = statestore((state)=>state.addpasser)
const passer = statestore((state)=>state.passer);
const setindexs= statestore((state)=>state.setindex);

const indexnumber= statestore((state)=>state.indexnum);
// const deleteindex=(index:number)=>{
// prior.splice(index,1)
// }
const removeindex=()=>{
  prior.splice(indexnumber,1)
  console.log(indexnumber);
  
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
      <div className="header">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Task name"
        />
        <input
          type="number"
          value={priornumber}
          onChange={(e) => setPriorNumber(Number(e.target.value))}
          placeholder="Priority number"
        />
        <button className="bg-black text-white px-3 py-1" onClick={handleSubmit}>
          Add
        </button>
      </div>

      <div className="priority-list">
      
         {prior.map((item,index) => (
          <div key={index}>
            Task: {item.task}  | Priority No: {item.priorityno } 
            <button onClick={()=>{
             addpasser(item.priorityno)
            }}>Complete </button> 
            <button onClick={()=>{setindexs(index) 
              removeindex();
            }}
           >delete task</button> 
          </div>
        ))}
     <div>
     {
     passer.map((value:number)=>(
      <div>
        {value}
      </div>
     ))
        }
     </div>
      </div>
    </>
  );
}

export default Header;
