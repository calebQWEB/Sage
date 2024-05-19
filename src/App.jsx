import './App.css';
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'
import {Outlet} from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <div className='violet-gradient min-h-full'>
        <Outlet/>
      </div>
      <Footer />
    </>
  )
}

export default App
