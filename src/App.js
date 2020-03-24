import React from 'react';
import { useDispatch } from 'react-redux';
import logo from './assets/static/logo.svg';
import './App.css';

// Actions
import { getAllUsers } from './store/actions/users.actions';

function App() {
  const dispatch = useDispatch();

  const fetchUsers = () => {
    dispatch(getAllUsers());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchUsers}>Fetch Users</button>
      </header>
    </div>
  );
}

export default App;
