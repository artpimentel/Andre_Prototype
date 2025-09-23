import styles from './styles.module.css'

function UserProfile() {

    return (
        <div className={styles.userProfile}>
            <div className={styles.profileInfo}>
                <img
                    src=""
                    alt=""
                    className={styles.profilePhoto}
                />
                <span className={styles.profileName}>
                    art.ol.pimentel
                </span>
            </div>
            <button className={styles.profileOptions}></button>
        </div>
    );
}

export default UserProfile;