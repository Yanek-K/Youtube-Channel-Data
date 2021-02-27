import React, {useState, useEffect } from 'react'

// Components
import ChannelInfo from './Components/ChannelInfo/ChannelInfo'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

//Style
import './App.css';

//Dependencies
import axios from 'axios'
require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY


function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState('')
 
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }


  const handleClick = () => {
    fetchApi(searchTerm)
  }
  

  console.log(searchData)


  const fetchApi = async (searchTerm) => {
      const url = `https://youtube.googleapis.com/youtube/v3/search?&part=snippet&q=${searchTerm}&maxResults=20&key=${api_key}`
      const response = await axios.get(url)
      setSearchData(response.data)
    }


  return (
    <div>
      <Header value={searchTerm} handleChange={handleChange} handleClick={handleClick} />
      <div className="App__page">
        <Sidebar />
        <ChannelInfo searchData={searchData} />
      </div>
    </div>
  )

}


export default App