import styles from './styles.module.css'

function PostHeader() {

    return (
        <div className={styles.postHeader}>
            <div className={styles.profileInfo}>                
                <img
                    src=""
                    alt=""
                    className={`${styles.profilePhoto} ${styles.post}`}
                />
                <span className={`${styles.profileName} ${styles.post}`}>
                    art.ol.pimentel
                </span>
            </div>
            <button className={styles.postOptions}></button>
        </div>
    )
}

export default PostHeader;