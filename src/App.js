import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    < >
      <Navbar title="Text_Utils"/>
      <div className="container">
        <TextForm heading='Enter text to analyze below' />
      </div>
      <hr />
      <About/>
    </>
  );
}

export default App;
