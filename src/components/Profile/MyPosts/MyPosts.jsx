import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () =>
    <div>
        My posts
        <Post message='Крутая фотка!'/>
        <Post message='Скорее бы уже на работу'/>
        <Post message='А ты хорош'/>
        <Post message='Крутяк!'/>
        <Post message='Молодец!'/>
    </div>;

export default MyPosts;
