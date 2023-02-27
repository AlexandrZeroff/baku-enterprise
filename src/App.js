import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ServicesPrev from './components/ServicesPrev';
import Services from './components/Services';
import Useful from './components/Useful';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="basic-container">
      <Navbar />
      <Header />
      <ServicesPrev />
      <Services />
      <Useful />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
