
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './assets/components/Navbar';





function App() {

  return (
    
  
    <div className="App">
  <Header></Header>
  <Outlet />
</div>
  );
}

export default App;

