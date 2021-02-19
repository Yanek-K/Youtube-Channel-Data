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
  const [searchTerm, setSearchTerm] = useState('deved')


  const fetchApi = async (searchTerm) => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${api_key}`
    const response = await axios.get(url)
    console.log(response)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <ChannelInfo />
    </div>
  )

}


export default App