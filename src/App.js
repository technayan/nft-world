import './App.css';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Store from './components/Store/Store';

function App() {

    return (
    <div className="App">
      <Header></Header>
      <Store></Store>
      <Questions></Questions>
    </div>
  );
}


export default App;
