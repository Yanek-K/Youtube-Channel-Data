import React from 'react'
import "./VideoPlayComments.css"
import Avatar from '@material-ui/core/Avatar'
import Comment from '../Comment/Comment'

function VideoPlayComments () {
    const handleComment = () => {

    }
    return (
        <div className="Comment">
            <p>15 Comments</p>
            <div className="Comment__form">
                <Avatar />
                <form onSubmit={handleComment} className="Comment__formText">
                    <input 
                        type="text"
                        className="Comment__input"
                        placeholder="Add a public comment"
                    />
                </form>
                <button className="Comment__button">
                    Comments
                </button>
            </div>
            <div className="Comments__list">
                {
                    [...Array(15)].map(()=> (
                        <Comment />
                    ))
                }
            </div>
        </div>
    )
}

export default VideoPlayComments