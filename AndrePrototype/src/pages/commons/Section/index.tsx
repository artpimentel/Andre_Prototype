import styles from './styles.module.css'
import { type ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
}

function Section({ children }: SectionProps) {

    return (
        <section className={styles.section}>
            {children}
        </section>
    );
}

export default Section;