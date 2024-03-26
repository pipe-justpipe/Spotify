import logo from './logo.svg';
import './App.css';
import Nav from './Header/Nav';
import Intro from './Intro/Intro';
import PickPremium from './PickPremium/PickPremium';
import Premium from './PowerPremium/Premium';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className='body'>
    <Nav/>
    <Intro/>
    <Premium/>
    <PickPremium/>
    <Footer/>
    </div>
  );
}

export default App;
