import styles from './styles.module.css'
import type { Producer } from '../../../../../types/Producer'

interface CatalogItemProps {
producer: Producer;
isActive?: boolean;
}

function CatalogItem({ producer, isActive }: CatalogItemProps) {
    return (
        <article
            className={`${styles.catalogItem} ${isActive ? styles.active : ''}`}
        >
            <img
                className={styles.producerImage}
                src=""
                alt=""
            />
            <div className={styles.itemInfo}>
                <h3 className={styles.producerName}>{producer.name}</h3>
                <span className={styles.procuderLocality}>{producer.locality}</span>
            </div>
        </article>
    );
}

export default CatalogItem;
