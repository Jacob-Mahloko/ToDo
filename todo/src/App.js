import './App.css';
import NotFound from './components/NotFound/NotFound';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import TaskForm from './components/taskform/taskform';
import Task from './components/Task/Task';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<TaskForm/>}/>
        <Route path='/tasks' element={<Task/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
