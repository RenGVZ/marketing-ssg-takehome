export type CarouselSlideType = {
  id: number
  src: string
}

type BlockType = "PARAGRAPH" | "HEADER" | "BLOCKQUOTE" | "IMAGE" | "CAROUSEL"

type Block = {
  id: string
  type: BlockType
  content: string
}

export type BlogProps = {
  id: string
  slug: string
  title: string
  description: string
  hero_image: string
  blocks: Block[]
}