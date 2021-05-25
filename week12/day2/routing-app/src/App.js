import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Nav from './components/Nav'
import Blog from './components/Blog'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path='/Blog' component={Blog} />
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
