import React from 'react';
import moment from 'moment';
const Notification = (props )=>{
    const {notifications} = props;
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content ">
                    <span className="card-title">Notification </span>
                    <ul  className="notifications">
                        {notifications && notifications.map((notif)=>{
                            return (
                                <li key={notif.id}>
                                    <span className="pink-text"> {notif.user} </span>
                                    <span>{notif.content} </span>
                                    <div className="grey-text note-date">
                                        {moment(notif.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification;
