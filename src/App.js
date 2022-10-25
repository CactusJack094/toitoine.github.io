
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/hero';
function App() {
  return (
    <html class="dark">
    <div className="App">
      <Navbar/>
      <div className="mt-5"><Hero/></div>
      
    </div>
    </html>
  );
}

export default App;
