import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import './App.css';


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header/>
        <Main/>
      </Wrapper>
      <Footer />
    </div>
  
  );
}

export default App;


