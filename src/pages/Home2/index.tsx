import styles from './styles.module.css'

import Header from '../commons/Header'
import Footer from '../commons/Footer'

import ProducersHighlights from './components/ProducersHighlights'
import HighlightSlider from './components/HighlightsSlider'
import ProducersCatalog from './components/ProducersCatalog'

function Home2() {

    return (
        <>
            <Header />
            <main className={styles.layout}>
                <ProducersHighlights />
                <HighlightSlider />
                <ProducersCatalog />
            </main>
            <Footer />
        </>
    );
}

export default Home2;