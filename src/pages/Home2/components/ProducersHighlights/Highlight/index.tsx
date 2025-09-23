import styles from './styles.module.css'

function Highlight() {

    return (
        <li className={styles.highlight}>
            <img
                src=""
                alt=""
                className={styles.profilePhoto}
            />
            <span className={styles.profileName}>
                art.ol.pimentel
            </span>
        </li>
    );
}

export default Highlight;