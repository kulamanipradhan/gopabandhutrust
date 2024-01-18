
import './App.css';
import AddressCompo from './components/AddressCompo';
import FooterCompo from './components/FooterCompo';

import HeroComponent from './components/HeroComponent';
import NavbarComponent from './components/NavbarComponent';


function App() {
  return (
    <div className="App">

      <NavbarComponent />
      <HeroComponent />
      <AddressCompo />

      <FooterCompo />


    </div>
  );
}

export default App;
