import styles from './styles.module.css'

import Highlight from './Highlight'

function ProducersHighlights() {

    return (
        <div className={styles.producersHighlights}>
            <ul className={styles.highlightsList}>
                <Highlight />
            </ul>
        </div>
    );
}

export default ProducersHighlights;