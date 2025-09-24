import styles from './styles.module.css'

import Header from '../commons/Header'
import Footer from '../commons/Footer'

import HighlightSlider from './components/HighlightsSlider'
import ProducersCatalog from './components/ProducersCatalog'

import type { Producer } from '../../types/Producer'
import allProducers from '../../data/producers'

function Home2() {

    const producersNearYou = allProducers.filter(
      (producer: Producer) => producer.locality === 'Rio de Janeiro'
    );
    
    const producersYouLike = allProducers.filter(
      (producer: Producer) => producer.tags.includes('loira')
    );

    return (
        <>
            <Header />
            <main className={styles.layout}>
                <HighlightSlider />

                <ProducersCatalog
                    producers={producersYouLike}
                    title="Produtoras para o seu Gosto"
                    filter="Loira"
                />
                <ProducersCatalog
                    producers={producersNearYou}
                    title="Produtoras Próximas de Você"
                    filter="Rio de Janeiro"
                />
            </main>
            <Footer />
        </>
    );
}

export default Home2;