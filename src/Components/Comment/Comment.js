import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Comment.css'

function Comment () {
    return (
        <div className = "Comments">
            <Avatar />
            <div className="Comments__body">
                <p className="Comments__header">
                    Sumit Dey • 8 Days Ago
                </p>
                <p className="Comments__text">
                    Nice Video!!
                </p>
            </div>

        </div>
    )
}

export default Comment