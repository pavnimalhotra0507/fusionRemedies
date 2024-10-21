import './App.scss';
import Header from './components/header/Header';
import HeroContainer from './components/heroContainer/HeroContainer';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <div className='app-wrapper'>
        <Header />
        <HeroContainer />
      </div>
      <About />
    </div>

  );
}

export default App;
