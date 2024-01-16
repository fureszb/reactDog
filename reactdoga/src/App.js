import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Model from './model/model.js';
import Kiegeszit from './komponens/Kiegeszit';

function App() {
  const MODEL = new Model();
  console.log(MODEL.getZarojel())
  return (
    <div className="App">
      <header className="App-header">
      <h1>Angol</h1>
      </header>
     <Kiegeszit model={MODEL}/>
      
    </div>
    
  );
}

export default App;
