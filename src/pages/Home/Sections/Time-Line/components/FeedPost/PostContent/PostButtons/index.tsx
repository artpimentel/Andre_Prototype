import styles from './styles.module.css'

import { FaRegHeart , FaRegComment , FaShare , FaRegBookmark } from "react-icons/fa6";

function PostButtons() {
    return (
        <div className={styles.postButtons}>
            <button className={`${styles.postButton} ${styles.like}`}><FaRegHeart /></button>
            <button className={`${styles.postButton} ${styles.comment}`}><FaRegComment /></button>
            <button className={`${styles.postButton} ${styles.share}`}><FaShare  /></button>
            <button className={`${styles.postButton} ${styles.save}`}><FaRegBookmark /></button>
        </div>
    )
}

export default PostButtons;