import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            <div className={classes.posts_wall}>
                Стена
            </div>
            <br/>
            <Post text="Привет, меня зовут Макс Штирнер Привет, меня зовут Макс Штирнер Привет, меня зовут Макс Штирнер Привет, меня зовут Макс Штирнер Привет, меня зовут Макс Штирнер Привет, меня зовут Макс Штирнер Привет, меня зовут Макс Штирнер" likes="33" image="https://sun9-55.userapi.com/c857332/v857332437/1732b5/joj6Q2Z7r3Q.jpg"/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts