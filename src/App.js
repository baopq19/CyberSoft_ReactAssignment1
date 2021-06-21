import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
