import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import Service from './components/Service/Service';
import TimePart from './components/TimePart/TimePart';

function App() {
  return (
    <div>
     <Header />
     <Banner />
     <TimePart />
     <Service />
     <Review />
     <Footer />
    </div>
  );
}

export default App;
