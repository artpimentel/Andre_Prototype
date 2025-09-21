import styles from './styles.module.css'

import Section from '../../../commons/Section'

import UserProfile from './components/UserProfile'
import Recomendations from './components/Recomendations'

function Profile() {

    return (
        <Section className={styles.profile} >
            <div className={styles.layout}>
                <UserProfile />
                <Recomendations />
            </div>
        </Section>
    );
}

export default Profile;