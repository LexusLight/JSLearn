import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return(
        <div className={classes.content}>
            <div>
                <div className={classes.hat}>
                    <img src="https://sun9-19.userapi.com/v0KS4WtOc-I3f18YWp19w8xTI2-YKLpqJGLDrQ/0M8pANz4QgE.jpg" className={classes.hat_avatar}></img>
                </div>
                <div className={classes.profile_link}>
                    @Lexuslight
                </div>
                <div>
                    Main Content
                </div>
                <div>
                    Main Content
                </div>
            </div>
        </div>
    )
}

export default Profile