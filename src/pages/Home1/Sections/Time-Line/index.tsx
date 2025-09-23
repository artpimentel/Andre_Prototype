import styles from './styles.module.css'

import Section from '../../../commons/Section'

import FeedPost from './components/FeedPost'
import StoriePost from './components/StoriePost'

function TimeLine() {

    return (
        <Section className={styles.timeLine}>
            <div className={styles.layout}>
                <div className={styles.stories}>
                    <ul className={styles.storiesList}>
                        <StoriePost />
                    </ul>
                </div>
                <div className={styles.feed}>
                    <ul className={styles.feedList}>
                        <FeedPost />
                        <FeedPost />
                    </ul>
                </div>
            </div>
        </Section>
    );
}

export default TimeLine;