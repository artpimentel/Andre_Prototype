import styles from './styles.module.css'

function StoriePost() {
    
    return (        
        <li className={styles.storiePost}>
            <img
                src=""
                alt=""
                className={`${styles.profilePhoto} ${styles.storie}`}
            />
            <span className={`${styles.profileName} ${styles.storie}`}>
                art.ol.pimentel
            </span>
        </li>
    )
}

export default StoriePost;