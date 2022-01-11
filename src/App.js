import './App.css';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
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
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
