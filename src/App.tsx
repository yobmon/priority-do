

import './App.css'
import Header from './header/header'
import Section from './section/section';
import Stats from './stats/stats';
import Main from './main/main'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
//import Calculateprior from './calculateprior/calculateprior'

function App() {


  return (
  <Router>
    <Routes>
    <Route
path='/'  
element={
<>
<Header />
<Section />
<Main />
</>
}
/>
<Route
path='status'
element={
  <>
  <Stats />
  
  
  </>
}
/>
   </Routes>
   </Router>
  )
}

export default App
