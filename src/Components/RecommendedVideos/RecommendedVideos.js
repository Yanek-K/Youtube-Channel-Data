import React, {useState} from 'react'
import './RecommendedVideos.css'
import axios from 'axios'

require('dotenv').config();
const api_key=process.env.REACT_APP_API_KEY



function RecommendedVideos () {

    // const [trendingData, setTrendingData] = useState('')

    // const fetchApi2 = async (searchTerm) => {
    //     const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=US&key=${api_key}`
    //     const response = await axios.get(url)
    //     setTrendingData(response.data)
    //     console.log(trendingData)
    // }

    // fetchApi2()

    
    return (
        <div>

        </div>
    )
}

export default RecommendedVideos