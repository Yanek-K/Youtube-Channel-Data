import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import './TrendingVideo.css'

function TrendingVideo ({image, title, channel, timestamp, views, id}) {

    

    return (
        <div className="TrendingVideo" >
            <img className="TrendingVideo__thumbnail" src={image} alt='' />
            <div className="TrendingVideo__info">
                <Avatar className="TrendingVideo__avatar" alt={channel} src={image} />
                <div className="TrendingVideo__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} views • {timestamp}
                    </p>
                </div>

            </div>
        </div>

    )
}

export default TrendingVideo;