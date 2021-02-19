import React, {useState} from 'react'
import ChannelInfo from './Components/ChannelInfo/ChannelInfo'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css';
import axios from 'axios'
const fetch = require('node-fetch')
require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY

function App () {
  const [search, setSearch] = useState('')

  const handleClick = (search) => { 
    axios.get(`https://www.googleapis.com/youtube/v3/&key=${api_key}&part=snippet,statistics`
      ).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error ("Request Failed");
      }, networkError => console.log(networkError.message)
      ).then (jsonResponse => {
        console.log(jsonResponse)
      })
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

    return (
      <div className="App">
        <Header handleChange={handleChange} handleClick={handleClick} value={search}/>
        <div className="App__page">
          <Sidebar />
          <ChannelInfo />
        </div>
      </div>
    );
}

export default App;
