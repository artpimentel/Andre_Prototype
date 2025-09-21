import styles from './styles.module.css'

function PostComments() {

    return (
        <div className={styles.postComments}>
            <ul className={styles.commentsList}>
                <li className={styles.postComment}>
                    <div className={styles.commentInfo}>
                        <img
                            src=""
                            alt=""
                            className={`${styles.profilePhoto} ${styles.comment}`}
                        />
                        <span className={`${styles.profileName} ${styles.comment}`}>
                            art.ol.pimentel
                        </span>
                    </div>
                    <p className={styles.commentContent}>BlaBlaBla</p>
                </li>
            </ul>
        </div>
    );
}

export default PostComments;