import styles from './styles.module.css'

import Recomendation from './Recomendation'

function Recomendations() {

    return (
        <div className={styles.recomendations}>
            <h3>Recomendações</h3>
            <ul className={styles.recomendationsList}>
                <Recomendation />
            </ul>
        </div>
    );
}

export default Recomendations;