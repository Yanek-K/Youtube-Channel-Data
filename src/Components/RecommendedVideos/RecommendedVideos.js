import React from 'react'
import './RecommendedVideos.css'
import TrendingVideo from '../TrendingVideo/TrendingVideo'


function RecommendedVideos ({trendingData}) {
    if (!trendingData) return ''

    let current = Math.round(new Date().getTime())
    let previous = Math.round(new Date(trendingData.items[0].snippet.publishedAt));     



    function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
 
        const elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ago';   
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ago';   
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ago';   
        }
    
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) + ' days ago';   
        }
    
        else if (elapsed < msPerYear) {
            return Math.round(elapsed/msPerMonth) + ' months ago';   
        }
    
        else {
            return Math.round(elapsed/msPerYear ) + ' years ago';   
        }
    }
    
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
                    timestamp={timeDifference(current, Math.round(new Date(data.snippet.publishedAt)))}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecommendedVideos