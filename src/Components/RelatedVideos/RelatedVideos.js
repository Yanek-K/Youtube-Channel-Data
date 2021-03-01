import React from 'react'
import './RelatedVideos.css'
import Avatar from '@material-ui/core/Avatar'

function RelatedVideos () {
    return (
        <div className="RelatedVideos">
            <div className="RelatedVideos__left">
                <img 
                    className="RelatedVideos__thumbnail"
                    src="https://i.ytimg.com/vi/tnz_yuK9qoM/maxresdefault.jpg"
                />
                {/* <span className="RelatedVideos__duration">02:00</span> */}


            </div>
            <div className="RelatedVideos__right">
                <p>Be a full stack developer in 5 months</p>
                <p className="RelatedVideos__channel">BackBench Coder</p>
                <p className="RelatedVideos__data">1m views • 7 months ago</p>
            </div>
            {/* <div className="RelatedVideos__channel">
               
            </div> */}
        </div>
    )
}

export default RelatedVideos