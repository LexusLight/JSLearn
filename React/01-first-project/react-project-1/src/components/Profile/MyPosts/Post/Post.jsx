import React from "react";
import classes from './Post.module.css';
// className={classes.post}

const Post = (props) => {
    return(
        <div className={classes.post_card}>
            <br/>
            <img src={props.image}></img>
            <div className={classes.preview_text}>
                {props.text}
                {/*<div className={classes.likes}>{props.likes}</div>*/}
            </div>
            <br/>

        </div>
    )
}

export default Post