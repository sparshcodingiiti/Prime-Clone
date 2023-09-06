import Header from './Header';
import './App.css';
import Home from './Home'
const App = () => {
  return (
    // BEM
    <div className="app">
      {/* {HEADER} */}
      <Header/>
      {/* {Home} */}
      <Home />
    </div>
  );
}

export default App;
