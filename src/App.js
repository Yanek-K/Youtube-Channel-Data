import React, {useState, useEffect } from 'react'

// Components
import ChannelInfo from './Components/ChannelInfo/ChannelInfo'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos'
import VideoPlay from './Components/VideoPlay/VideoPlay'

//Style
import './App.css';

//Dependencies
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY
const api_key_2 = process.env.REACT_APP_API_KEY_2


function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState('')
  const [searchStats, setSearchStats] = useState('')
 
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }


  const handleClick = () => {
    fetchApi(searchTerm)
  }
  

  console.log(searchData)


  const fetchApi = async (searchTerm) => {
      const url = `https://youtube.googleapis.com/youtube/v3/search?&part=snippet&q=${searchTerm}&maxResults=20&key=${api_key_2}`
      const response = await axios.get(url)
      setSearchData(response.data)

      // const response2 = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=searchData.items.id.channelId&key=${api_key}`)
      // setSearchStats(response2)
      
    }

  const [trendingData, setTrendingData] = useState('')

  const fetchApi2 = async (searchTerm) => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=60&regionCode=US&key=${api_key}`
      const response = await axios.get(url)
      setTrendingData(response.data)
      
  }


  useEffect(()=>{
      fetchApi2()
  }, [])

  console.log(trendingData)


  return (
    <div>
      <Router>
        <Header value={searchTerm} handleChange={handleChange} handleClick={handleClick} />
        <Switch>
          <Route path = '/search/:searchTerm'>
            <div className="App__page">
              <Sidebar />
              <ChannelInfo searchData={searchData} />
            </div>
          </Route>
          <Route path = '/' exact>
            <div className="App__page">
              <Sidebar />
              <RecommendedVideos trendingData={trendingData} />
            </div>
          </Route>
          <Route path = '/watch/:id'>
            <div className="App__page">
              <VideoPlay />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )

}


export default App