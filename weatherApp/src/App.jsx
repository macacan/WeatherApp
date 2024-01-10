import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const api = {
  key: "db87f278d9f51e2ce2523b851566af30",
  base:"https://api.openweathermap.org/data/2.5/"}

function App = () => {

  
    return (
      <>
        <h1>Väder applikation</h1>
  
        <input type="text" placeholder='Sök' />
  
        <p>Stockholm, Sverige</p>
  
        <p>temperatur 20C</p>
  


        
        <p>soligt</p>
        </>
  );
};

export default App
