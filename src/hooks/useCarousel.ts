import { useState } from 'react'
import { CarouselSlideType } from '../types'

export function useCarousel(slides: CarouselSlideType[]) {
  const [activeIndex, setActiveIndex] = useState(0)
  const handlePrev = () =>
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1)
  const handleNext = () =>
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1)
  return { activeSlide: slides[activeIndex], handlePrev, handleNext }
}
