import React, { useState } from "react"
import styled from "@emotion/styled"
import { CarouselSlideType } from "../types"
import { useCarousel } from "../hooks/useCarousel"

const CarouselWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  .slides {
    diplay: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
  }

  .slide {
    width: 100%;
    height: 100%;

    &.inactive {
      display: none;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`

export function Carousel({ content }: { content: string }) {
  let slides: CarouselSlideType[] = []
  try {
    slides = JSON.parse(content)
  } catch (error) {
    console.error("Invalid content prop:", error)
  }

  if (!slides.length) {
    return null
  }

  const { activeSlide, handlePrev, handleNext } = useCarousel(slides)

  return (
    <CarouselWrapper>
      <div className="slides">
        {slides.map((slide: CarouselSlideType) => (
          <img
            className={`slide ${activeSlide.id !== slide.id ? "inactive" : ""}`}
            src={slide.src}
            key={slide.id}
          />
        ))}
      </div>

      <div className="buttons">
        <button onClick={handlePrev}>Prev slide</button>
        <button onClick={handleNext}>Next slide</button>
      </div>
    </CarouselWrapper>
  )
}
