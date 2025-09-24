import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Slide {
    id: number;
    src: string;
    alt: string;
}

const sliderData: Slide[] = [
    { id: 1, src: 'https://www.riosexsite.com/files/banners/14092025_131650.jpg', alt: 'Descrição da foto 1' },
    { id: 2, src: 'https://www.riosexsite.com/files/banners/14092025_131659.jpg', alt: 'Descrição da foto 2' },
    { id: 3, src: 'https://www.riosexsite.com/files/banners/14092025_131709.jpg', alt: 'Descrição da foto 3' },
];

function HighlightSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = sliderData.length;
    const slideInterval = 5000;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, slideInterval);

        return () => clearInterval(interval);
    }, [currentSlide, totalSlides]);

    return (
        <div className={styles.highlightSlider}>
            <div
                className={styles.slideContainer}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {sliderData.map((slide) => (
                    <img
                        key={slide.id}
                        src={slide.src}
                        alt={slide.alt}
                        className={styles.slideImage}
                    />
                ))}
            </div>

            <div className={styles.controls}>
                <button onClick={goToPrevSlide}><IoChevronBackOutline /></button>
                <button onClick={goToNextSlide}><IoChevronForwardOutline /></button>
            </div>

            <div className={styles.indicators}>
                {sliderData.map((_, index) => (
                    <input
                        key={index}
                        type="radio"
                        name="slider-indicator"
                        checked={index === currentSlide}
                        onChange={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default HighlightSlider;