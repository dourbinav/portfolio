import Navbar from './Navbar';
import Content from './Content';
import Projects from './Projects';
import Techno from './Techno';
import Contact from './Contact';
import About from './About';
import Footee from './Footee';

function App() {
  return (
  <div >
  <Navbar />
  <Content />
  <div className='sm:flex sm:bg-purple-400 sm:p-6'>
<div> <About /></div>
<div className='pt-6'> <Techno /></div>
  </div>
  <Projects /> 
   <Contact /> 
   <Footee />
  </div>
  );
}

export default App;
