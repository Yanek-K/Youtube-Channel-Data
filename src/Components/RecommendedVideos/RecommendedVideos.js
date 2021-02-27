import React from 'react'
import './RecommendedVideos.css'
import TrendingVideo from '../TrendingVideo/TrendingVideo'


function RecommendedVideos ({trendingData}) {
    if (!trendingData) return ''
    
    return (
        <div className="RecommendedVideos">
            <h2>Trending</h2>
            <div className="RecommendedVideos__videos">
                {trendingData.items.map(data => (
                    <TrendingVideo
                    key={data.etag}
                    image={data.snippet.thumbnails.medium.url}
                    channel={data.snippet.channelTitle}
                    verified
                    subs='132'
                    views="231"
                    description={data.snippet.description}
                    title={data.snippet.title}
                    timestamp={data.snippet.publishedAt}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecommendedVideos