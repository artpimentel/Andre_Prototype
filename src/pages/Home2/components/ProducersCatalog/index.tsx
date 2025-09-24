import { useRef, useState, useEffect } from "react";

import styles from "./styles.module.css";
import { IoChevronBackOutline, IoChevronForwardOutline, IoAddOutline } from "react-icons/io5";

import Section from "../../../commons/Section";
import type { Producer } from '../../../../types/Producer'
import CatalogItem from "./catalogItem";

interface ProducersCatalogProps {
  producers: Producer[];
  title: string;
  filter: string;
}

interface ViewMoreItemProps {
  isActive?: boolean;
}

const ViewMoreItem = ({ isActive }: ViewMoreItemProps) => {
    return (
        <a
        className={`${styles.viewMoreItem} ${isActive ? styles.active : ""}`}
        href="/ver-mais"
        >
            <IoAddOutline />
        </a>
    );
};

function ProducersCatalog({ producers, title, filter }: ProducersCatalogProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const maxItems = 10;
    const producersToShow =
        producers.length > maxItems ? producers.slice(0, maxItems) : producers;
    const hasMore = producers.length > maxItems;

    const scrollToIndex = (index: number) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const items = container.children;

        if (!items[index]) return;

        const containerRect = container.getBoundingClientRect();
        const itemRect = (items[index] as HTMLElement).getBoundingClientRect();

        const leftOffset = 384;

        const offset =
            itemRect.left -
            containerRect.left -
            (containerRect.width / 2 - itemRect.width / 2) +
            leftOffset;

        container.scrollBy({
            left: offset,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToIndex(activeIndex);
    }, [activeIndex]);

    const prevItem = () => {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextItem = () => {
    setActiveIndex((prev) =>
        Math.min(prev + 1, producersToShow.length + (hasMore ? 1 : 0) - 1)
    );
    };

    return (
        <Section className={styles.ProducersCatalog}>
            <h2 className={styles.catalogTitle}>{title} <span>({filter})</span></h2>

            <div className={styles.catalogContent}>
                <div className={styles.catalogItens} ref={scrollContainerRef}>
                    {producersToShow.map((producer, index) => (
                        <CatalogItem
                            key={producer.id}
                            producer={producer}
                            isActive={index === activeIndex}
                        />
                    ))}

                    {hasMore && (
                        <ViewMoreItem isActive={activeIndex === producersToShow.length} />
                    )}
                </div>

                <div className={styles.catalogButtons}>
                    <button
                        className={styles.scrollButtonLeft}
                        onClick={prevItem}
                        disabled={activeIndex === 0}
                    >
                        <IoChevronBackOutline />
                    </button>

                    <button
                    className={styles.scrollButtonRight}
                    onClick={nextItem}
                    disabled={
                        activeIndex === producersToShow.length + (hasMore ? 1 : 0) - 1
                    }
                    >
                    <IoChevronForwardOutline />
                    </button>
                </div>
            </div>
        </Section>
    );
}

export default ProducersCatalog;
