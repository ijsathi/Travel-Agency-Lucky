import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Service from './components/Service/Service';
import TimePart from './components/TimePart/TimePart';

function App() {
  return (
    <div>
     <Header />
     <Banner />
     <TimePart />
     <Service />
     <Footer />
    </div>
  );
}

export default App;
