import styles from './styles.module.css'

import { IoSearchOutline, IoNotificationsOutline, IoPersonOutline  } from "react-icons/io5";

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.layout}>
                <img
                    src=""
                    alt=""
                    className={styles.logo}    
                />
                <div className={styles.searchBar}>
                    <input 
                        type="search" 
                        placeholder="Pesquisa..."
                        className={styles.searchInput}
                    />
                    <button className={styles.searchButton}><IoSearchOutline /></button>
                </div>
                <div className={styles.headerButtons}>
                    <button className={styles.button}><IoNotificationsOutline /></button>
                    <button className={styles.button}><IoPersonOutline /></button>
                </div>
            </div>
        </header>
    );
}

export default Header;