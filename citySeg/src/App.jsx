
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './assets/components/Navbar';


function App() {

  return (
  
      <div className="App">
        <Header />
        <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
</div>
  );
}

export default App;

