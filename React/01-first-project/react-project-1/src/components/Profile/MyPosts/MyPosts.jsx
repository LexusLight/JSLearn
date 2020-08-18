import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let render_all_posts = (item) => {
         return item.messages.map(el=> <Post message={el} />);
    }

    let textarea_ref = React.createRef()

    let add_post = () => {
        props.addMessage(textarea_ref.current.value);
        textarea_ref.current.value = "";
    }

    return(
        <div>
            <div className={style.posts_wall}>
                Стена
            </div>
            <div className={style.post_form_block}>
                <textarea className={style.textarea} ref={textarea_ref}/>
                <br/>
                <button onClick={add_post}>Отправить</button>
            </div>
            <br/>
            <div>
                {render_all_posts(props.data)}
            </div>

        </div>
    )
}

export default MyPosts