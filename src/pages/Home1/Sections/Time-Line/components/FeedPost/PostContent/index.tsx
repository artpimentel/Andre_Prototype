import styles from './styles.module.css'

import PostButtons from './PostButtons'
import PostComments from './PostComments'

function PostContent() {

    return (
        <div className={styles.postContent}>
            <PostButtons />
            <p className={styles.postDesc}>BlaBlaBla</p>
            <PostComments />
        </div>
    )
}

export default PostContent;