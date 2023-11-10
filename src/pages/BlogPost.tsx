import styled from "@emotion/styled";

import { components } from "../components";

type BlockType = "PARAGRAPH" | "HEADER" | "BLOCKQUOTE" | "IMAGE";

type Block = {
  id: string;
  type: BlockType;
  content: string;
};

export type Props = {
  id: string;
  slug: string;
  title: string;
  description: string;
  hero_image: string;
  blocks: Block[];
};

const Wrapper = styled.article`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;

  header {
    display: flex;
    justify-content: flex-end;
  }

  section {
    h1 {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    p {
      font-size: 20px;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    img {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  div {
    p {
      font-size: 20px;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    blockquote {
      font-size: 20px;
      font-style: italic;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    img {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  dialog {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 10vh;
    height: 80vh;
    width: 90vw;
    background: white;

    &[data-state="visible"] {
      display: flex;
    }

    form {
    }

    > button {
      margin-top: 20px;
    }
  }
`;

export function BlogPost(props: Props) {
  return (
    <Wrapper>
      <header>
        <button id="inquiry">send inquiry</button>
      </header>
      <section>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.hero_image} />
      </section>

      <div>
        {props.blocks.map((block) => {
          const Component = components[block.type];

          return <Component key={block.id} content={block.content} />;
        })}
      </div>

      <dialog>
        <form>
          <fieldset>
            <label htmlFor="name">name</label>
            <input type="name" id="name" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </fieldset>
          <button type="submit">Send</button>
        </form>

        <button>close</button>
      </dialog>
    </Wrapper>
  );
}
