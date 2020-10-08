import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return(
        <div className={style.content}>
            <div>
                <div className={style.hat}>
                    <img alt="бла" src="https://sun9-19.userapi.com/v0KS4WtOc-I3f18YWp19w8xTI2-YKLpqJGLDrQ/0M8pANz4QgE.jpg" className={style.hat_avatar}/>
                </div>
                <div className={style.profile_link}>
                    @Lexuslight
                </div>
                <MyPosts data={props.data} addMessage={props.addMessage}/>
            </div>
        </div>
    )
}

export default Profile