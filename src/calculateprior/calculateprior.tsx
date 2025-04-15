
import statestore from '../zustandprovide/provide'

function Calculateprior(){

const priorstate = statestore((state)=>state.priority)
return(
    <>
  {priorstate.map((item) => (
          <div key={item.priorityno}>
            Task: {item.task} | Priority No: {item.priorityno}
          </div>
        ))}
    </>
)




}
export default Calculateprior;