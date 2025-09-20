import styles from './styles.module.css'
import Menu from './Sections/Menu'
import TimeLine from './Sections/Time-Line'
import Profile from './Sections/Profile'

function Home() {

    return (
        <main className={styles.layout}>
            <Menu />
            <TimeLine />
            <Profile />
        </main>
    );
}

export default Home;