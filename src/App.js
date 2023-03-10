import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/home/Home.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
