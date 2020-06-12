import React from 'react';
import './App.css';
import { LoginForm } from './components/Login/LoginForm';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Sign up Form</h1>
        <p className="sub-title">Sign in using the below form</p>
      </header>
      <main className="main-container">
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
