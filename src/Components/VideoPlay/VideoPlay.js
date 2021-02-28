import React from 'react'
import "./VideoPlay.css"
import VideoMetaData from '../VideoMetaData/VideoMetaData'
import VideoPlayComments from '../VideoPlayComments/VideoPlayComments'

function VideoPlay () {
    return (
        <div>
            <div className="VideoPlay__player">
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
    )
}

export default VideoPlay