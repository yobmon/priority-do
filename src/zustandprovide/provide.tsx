import { create } from 'zustand';

interface InnerPriority {
  task: string;
  priorityno: number;
}


interface DefineState {
  indexnum:number;

  setindex:(index:number)=>void;
  
  priority: InnerPriority[];
  passer:number[];
  addpasser:(passed:number)=>void;
  addpriority: (item: InnerPriority) => void;
}

const statestore = create<DefineState>((set) => ({
  indexnum:0,
  setindex:(index)=>set(
    ()=>(
      {
  indexnum:index,
      }
    )
  ),
  passer:[],
  addpasser:(passed)=>set((state)=>({
passer :[...state.passer,passed],
  }))
    ,
  priority: [],
  addpriority: (item) =>
    set((state) => ({
      priority: [...state.priority, item],

    })),
}));

export default statestore;
