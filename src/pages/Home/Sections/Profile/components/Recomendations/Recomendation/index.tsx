import styles from './styles.module.css'

function Recomendation() {

    return (
        <li className={styles.recomendation}>
            <div className={styles.recomendationInfo}>
                <img
                    src=""
                    alt=""
                    className={styles.profilePhoto}
                />
                <div className={styles.profileInfo}>
                    <span className={styles.profileName}>
                        art.ol.pimentel
                    </span>
                    <p className={styles.profileBio}>BlaBlaBla</p>
                </div>
            </div>
            <button className={styles.recomendationOptions}></button>
        </li>
    );
}

export default Recomendation;