import { useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IoChevronBackOutline, IoChevronForwardOutline, IoAddOutline } from "react-icons/io5";

import Section from "../../../commons/Section";
import type { Producer } from '../../../../types/Producer';
import CatalogItem from "./catalogItem";

interface ProducersCatalogProps {
  producers: Producer[];
  title: string;
  filter: string;
}

const ViewMoreItem = () => (
  <a className={styles.viewMoreItem} href="/ver-mais">
    <IoAddOutline />
  </a>
);

function ProducersCatalog({ producers, title, filter }: ProducersCatalogProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const maxItems = 14;
  const itemsPerPage = 5;
  const producersToShow =
    producers.length > maxItems ? producers.slice(0, maxItems) : producers;
  const hasMore = producers.length > maxItems;

  const totalItems = producersToShow.length + (hasMore ? 1 : 0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

const scrollToPage = (page: number) => {
  if (!scrollContainerRef.current) return;

  const container = scrollContainerRef.current;
  const items = container.children;
  if (!items[0]) return;

  const firstItem = items[0] as HTMLElement;
  const itemWidth = firstItem.offsetWidth;
  const gap = 16;

  const blockWidth = itemsPerPage * itemWidth + (itemsPerPage - 1) * gap;
  const containerWidth = container.offsetWidth;

  // 🔹 Pega paddings direto do CSS
  const style = window.getComputedStyle(container);
  const paddingLeft = parseFloat(style.paddingLeft) || 0;
  const paddingRight = parseFloat(style.paddingRight) || 0;

  const startIndex = page * itemsPerPage;
  const startOffset = startIndex * (itemWidth + gap) + paddingLeft;

  const maxScroll = container.scrollWidth - containerWidth + paddingRight;

  const scrollAmount = startOffset - (containerWidth / 2 - blockWidth / 2);

  const finalScroll = Math.max(0, Math.min(scrollAmount, maxScroll));

  container.scrollTo({
    left: finalScroll,
    behavior: "smooth",
  });
};

const prevPage = () => setPageIndex(prev => Math.max(prev - 1, 0));
const nextPage = () => setPageIndex(prev => Math.min(prev + 1, totalPages - 1));

useEffect(() => {
  scrollToPage(pageIndex);
}, [pageIndex]);

  return (
    <Section className={styles.ProducersCatalog}>
      <h2 className={styles.catalogTitle}>
        {title} <span>({filter})</span>
      </h2>

      <div className={styles.catalogContent}>
        <div className={styles.catalogItens} ref={scrollContainerRef}>
          {producersToShow.map(producer => (
            <CatalogItem key={producer.id} producer={producer} />
          ))}
          {hasMore && <ViewMoreItem />}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.scrollButtonLeft}
            onClick={prevPage}
            disabled={pageIndex === 0}
          >
            <IoChevronBackOutline />
          </button>

          <button
            className={styles.scrollButtonRight}
            onClick={nextPage}
            disabled={pageIndex === totalPages - 1}
          >
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </Section>
  );
}

export default ProducersCatalog;
