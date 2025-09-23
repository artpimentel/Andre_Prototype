import styles from './styles.module.css'

import PostContent from './PostContent'
import PostHeader from './PostHeader'

function FeedPost() {

    return (
        <li className={styles.feedPost}>
            <PostHeader />
            <img
                src=""
                alt=""
                className={styles.postImage}
            />
            <PostContent />
        </li>
    )
}

export default FeedPost;