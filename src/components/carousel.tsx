import { useState } from "react"
import styled from "@emotion/styled"

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

type ImageType = {
  id: number
  src: string
}

export function Carousel({ content }: { content: string }) {
  const images: ImageType[] = JSON.parse(content).map((image: string) => image)

  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    return activeIndex === 0
      ? setActiveIndex(images.length - 1)
      : setActiveIndex(activeIndex - 1)
  }

  const handleNext = () => {
    return activeIndex === images.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1)
  }

  return (
    <CarouselWrapper>
      <div className="slides">
        {images.map((image: ImageType) => (
          <img
            className={`slide ${activeIndex !== image.id ? "inactive" : ""}`}
            src={image.src}
            key={image.id}
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
