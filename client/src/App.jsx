import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
        <div className="d-flex mx-auto justify-content-around flex-wrap">
            <h1>Favorite Authors</h1>
        </div>
        <Router>
            <Main path='/' />
            <Create path='/new' />
            <Edit path='/edit/:id' />
            <NotFound path='/404' />
        </Router>
    </div>
  );
}

export default App;