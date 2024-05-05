//outlet is a reqired import from react-router-dom
import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
 
  return (
    <div>
      <Navbar />
   <main className='mx-3'>
    <Outlet />
   </main>
    </div>
    
  );
}

export default App;
