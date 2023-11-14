import { faker } from "@faker-js/faker";

type BlockType = "PARAGRAPH" | "HEADER" | "BLOCKQUOTE" | "IMAGE" | "CAROUSEL";

class Block {
  id: string;
  type: BlockType;
  content: string;

  constructor(type: BlockType) {
    this.id = faker.string.uuid();
    this.type = type;
    if (type === "PARAGRAPH") {
      this.content = faker.lorem.paragraphs();
    } else if (type === "HEADER") {
      this.content = faker.lorem.sentence();
    } else if (type === "BLOCKQUOTE") {
      this.content = faker.lorem.paragraph();
    } else if (type === "IMAGE") {
      this.content = "https://cataas.com/cat";
    } else if (type === "CAROUSEL") {
      this.content = JSON.stringify(
        new Array(10).fill(null).map((_, id) => {
          return { id: id, src: faker.image.urlLoremFlickr() }
        })
      );
    } else {
      this.content = "";
    }
  }
}

export class BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  hero_image: string;
  blocks: Block[];

  constructor(slug: string) {
    this.id = faker.string.uuid();
    this.slug = slug;
    this.title = faker.lorem.sentence();
    this.description = faker.lorem.paragraph();
    this.hero_image = faker.image.urlLoremFlickr();
    this.blocks = [
      new Block("PARAGRAPH"),
      ...new Array(faker.number.int({ min: 5, max: 20 }))
        .fill(null)
        .map(
          () =>
            new Block(
              faker.helpers.arrayElement([
                "PARAGRAPH",
                "HEADER",
                "BLOCKQUOTE",
                "IMAGE",
                "CAROUSEL",
              ])
            )
        ),
    ];
  }
}
