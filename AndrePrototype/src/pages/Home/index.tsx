import styles from './styles.module.css'
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import Welcome from './Sections/Welcome'
import TimeLine from './Sections/Time-Line'

function Home() {

    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Welcome />
                <TimeLine />
            </main>
            <Footer />
        </div>
    );
}

export default Home;