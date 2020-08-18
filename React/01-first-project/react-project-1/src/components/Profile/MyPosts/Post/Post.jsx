import React from "react";
import style from './Post.module.css';
// className={classes.post}

const Post = (props) => {
    return(
        <div className={style.post_card}>
            <br/>
            <img alt="альт" src={"https://sun9-19.userapi.com/v0KS4WtOc-I3f18YWp19w8xTI2-YKLpqJGLDrQ/0M8pANz4QgE.jpg"}/>
            <div className={style.preview_text}>
                {props.message}
                {/*<div className={classes.likes}>{props.likes}</div>*/}
            </div>
            <br/>

        </div>
    )
}

export default Post