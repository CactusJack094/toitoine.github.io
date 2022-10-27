
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/hero';
import Timeline from './Components/Timeline';
import Footer from './Components/Footer';
function App() {
  return (
    <html class="dark">
    <div className="App bg-gray-900">
      
      <nav><Navbar/></nav>
      
      <section className=" mt-10  md:mt-10"><Hero/></section>
      <section className="mt-10"><Timeline/></section>
      <footer><Footer/></footer>
    </div>
    </html>
  );
}

export default App;
