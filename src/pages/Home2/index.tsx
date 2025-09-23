import styles from './styles.module.css'

import Header from '../commons/Header'
import Footer from '../commons/Footer'

import ProducersHighlights from './components/ProducersHighlights'
import HighlightSlider from './components/HighlightsSlider'

function Home2() {

    return (
        <>
            <Header />
            <main className={styles.layout}>
                <ProducersHighlights />
                <HighlightSlider />
            </main>
            <Footer />
        </>
    );
}

export default Home2;