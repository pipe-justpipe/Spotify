import logo from './logo.svg';
import './App.css';
import Nav from './Header/Nav';
import Intro from './Intro/Intro';
import PickPremium from './PickPremium/PickPremium';
import Premium from './PowerPremium/Premium';


function App() {
  return (
    <div className='body'>
    <Nav/>
    <Intro/>
    <Premium/>
    <PickPremium/>
    </div>
  );
}

export default App;
