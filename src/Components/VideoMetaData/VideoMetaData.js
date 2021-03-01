import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Avatar from '@material-ui/core/Avatar'
import './VideoMetaData.css'
import ShowMoreText from 'react-show-more-text'


function VideoMetaData () {
    return (
        <div className="VideoMetaData">
            <div className="VideoMetaData__top">
                <h4>Bohemian Rhapsody | Muppet Music Video | The Muppets</h4>
                <div className="VideoMetaData__data">
                   <span>130k Views • Dec 29, 2020</span> 
                   <div className="VideoMetaData__likes">
                       <span>
                            <ThumbUpIcon className="VideoMetaData__icon"/>
                            <p>20</p>
                        </span>
                        <span>
                            <ThumbDownIcon className="VideoMetaData__icon"/>
                            <p>10</p>
                        </span>
                    </div>
                </div>

            </div>
            <hr />
            <div className="VideoMetaData__channel">
                <div className="VideoMetaData__channelData">
                    <Avatar alt="U" />
                    <div className="VideoMetaData__channelInfo">
                        <span><strong>BackBench Coder</strong></span>
                        <p>100k Subscribers</p>
                    </div>
                </div>
                <button className="Subscribe__button">Subscribe</button>
            </div>
            <div className="VideMetaData__description">
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    anchorClass="showMoreText"
                    expanded={false}
                    >
                lorem ipsum decor meoid terit askd amsdk wojs
                lorem ipsum decor meoid terit askd amsdk wojs
                lorem ipsum decor meoid terit askd amsdk wojs
                lorem ipsum decor meoid terit askd amsdk wojs
                lorem ipsum decor meoid terit askd amsdk wojs
                lorem ipsum decor meoid terit askd amsdk wojs
                lore
                </ShowMoreText>
            </div>
            <hr />
        </div>
    )
}

export default VideoMetaData