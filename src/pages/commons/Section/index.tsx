import styles from './styles.module.css'
import { type ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?:string;
}

function Section({ children, className }: SectionProps) {
    const classes = `${styles.section} ${className || ''}`.trim();

    return (
        <section className={classes}>
            {children}
        </section>
    );
}

export default Section;