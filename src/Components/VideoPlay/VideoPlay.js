import React from 'react'
import "./VideoPlay.css"
import VideoMetaData from '../VideoMetaData/VideoMetaData'
import VideoPlayComments from '../VideoPlayComments/VideoPlayComments'
import RelatedVideos from '../RelatedVideos/RelatedVideos'

function VideoPlay () {
    return (
        <div className="VideoPlay">
            <div className="VideoPlay__main">
                <div className="VideoPlay__player">
                    <div className="VideoPlay__video">
                        <iframe src = 'https://youtube.com/embed/tgbNymZ7vqY'
                            frameBorder="0"
                            title="Title"
                            allowFullScreen
                            width='100%'
                            height='100%'
                            >
                        </iframe>
                    </div>
                    <VideoMetaData />
                    <VideoPlayComments />
                </div>
                
            
                <div className="VideoPlay__RelatedVideos">
                    {[...Array(20)].map(() => (
                        <RelatedVideos />
                    ))}
                </div>
                
                
                
            </div>
         
        </div>
    )
}

export default VideoPlay