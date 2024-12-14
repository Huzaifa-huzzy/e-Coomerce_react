import './App.css';
import Navbar from './components/forntendcomp/navbar/navbar';
import Cta from './components/forntendcomp/cta/cta';
import Brands from './components/forntendcomp/brands/brands';
import Popular from './components/forntendcomp/popular/popular';
import Offers from './components/forntendcomp/offers/offers';
import Newcollection from './components/forntendcomp/new-collection/New-collection';
import ChooseUs from './components/forntendcomp/ChooseUs/ChooseUs';
import Footer from './components/forntendcomp/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cta/>
      <Brands/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <ChooseUs/>
      <Footer/>
    </div>
  );
}

export default App;
