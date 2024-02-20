import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import './project-card.js';

@customElement('landing-page')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LandingPage extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
      /* outline: 1px solid red; */
    }

    :host {
      height: 100vh; /* Full viewport height */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #2c2c2f; /* Adjust based on your gradient */
      background: linear-gradient(
        90deg,
        rgba(236, 206, 144, 1) 0%,
        rgba(242, 211, 146, 255) 57%,
        rgba(250, 239, 217, 255) 94%,
        rgba(244, 238, 220, 1) 100%
      );
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10%;
      width: 100%;
    }

    .main-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 90%;
      width: 100%;
    }

    .text-container {
      display: flex; /* Use flexbox for alignment */
      flex-direction: column; /* Stack children vertically */
      justify-content: flex-start; /* Center children vertically */
      align-items: center; /* Center children horizontally */

      flex-basis: 50%; /* Fill half the width of the container */
      height: 95%; /* Fill the height of the container */
      width: 90%;
      box-sizing: border-box;
    }

    .text-container {
      & h1 {
        font-size: 2rem;
        font-size: 2vw;
        font-weight: 600;
        font-style: italic;

        width: 80%;
        text-align: center;
      }

      & h2 {
        font-size: 1.5rem;
        font-size: 1.5vw;
        font-weight: 600;
        font-style: italic;

        width: 80%;
        text-align: center;
      }

      & p {
        font-family: 'Lora', serif;
        font-size: 1.1rem;
        font-size: 1.1vw;
        font-weight: 450;

        text-align: center;
        width: 80%;
      }
    }

    .typewriter {
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      border-right: 0.15em solid #b24227; /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: 0.15em; /* Adjust as needed */
      animation: typing 3.5s steps(10, end), blink-caret 0.75s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: #b24227;
      }
    }

    .text-container button {
      font-family: 'IBM Plex Mono', sans-serif, monospace;
      color: #2c2c2f;

      font-size: 2rem;
      font-size: 2vw;
      font-weight: 800;
      font-style: italic;
      text-decoration: underline solid #b24227 0.2rem;

      border-radius: 2rem;
      background: none;
      border: none;
      outline: none;

      padding: 2rem;
      margin-top: 2rem;

      cursor: pointer;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }

    .lightbox-container {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-basis: 50%;
      height: 100%;
      padding: 2rem;
      box-sizing: border-box;
    }

    .lightbox-container img {
      width: 95%;
      aspect-ratio: 1 / 1;
      padding: 1rem;
      max-width: 100%;
      max-height: 100%;
      box-sizing: border-box;
    }

    .header p {
      font-size: 1.5rem;
      font-size: 1.5vw;
      font-weight: 600;
      font-style: italic;

      margin: 0.5rem 2rem;

      & a {
        color: #2c2c2f;
        text-decoration: none;
        cursor: pointer;

        transition: transform 0.2s;

        &:hover,
        &:focus {
          transform: scale(1.1);
          color: #b24227;
        }
      }
    }

    .header .index {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-basis: 40%;

      height: 80%;
    }

    @media (max-width: 768px) {
      :host {
        height: auto;
      }

      .main-content {
        flex-direction: column;
      }
    }
  `;

  pages = [
    'empathy',
    'decomposition',
    'analogy',
    'style',
    'context',
    'collage',
  ];

  roman_numerals = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ'];

  headerTemplate() {
    return html`<div class="header">
      <p>⏺ experience.design</p>
      <p>·</p>
      <div class="index">
        ${this.pages.map(
          (page, index) => html`<p>
            <a href=${page}>${this.roman_numerals[index]}</a>
          </p>`
        )}
      </div>
      <p>·</p>
      <p><a href="empathy">start →</a></p>
    </div>`;
  }

  coverImageAddress =
    'https://media.discordapp.net/attachments/1180134288210018314/1209537739482071110/image.png?ex=65e748cd&is=65d4d3cd&hm=b2a25816cf69bc387e5b359dc52845ce5883f72be84c073da4a0947a227d8453&=&format=webp&quality=lossless';

  render() {
    return html`
      ${this.headerTemplate()}
      <div class="main-content">
        <div class="text-container">
          <h1>cs489 2023-24</h1>
          <h2>dixit.sabharwal</h2>
          <p>
            This portfolio is a collection of my work, over the six design
            projects undertaken in the Experience Design course of 2023.
          </p>
          <p>
            The work is presented through a gallery of a.i. generated images
            showing the progression of the design process and the final design
            outcomes.
          </p>
          <p>
            The course focused on combining design techniques with generative
            a.i. to fast-track the design process and create unique, visually
            appealing designs.
          </p>
          <p>
            The projects covered six different design principles and each
            introduced a new technique which was augmented by the use of
            generative a.i. tools like Midjourney, DallE, and ChatGPT.
          </p>

          <button
            @click=${() => {
              window.location.href = '/empathy';
            }}
          >
            <div class="typewriter">explore ↝</div>
          </button>
        </div>
        <div class="lightbox-container">
          <img
            src=${this.coverImageAddress}
            alt="Abstract illustration combining pencil sketch drawing enchanted with midjourney-esque hyperstylization"
          />
        </div>
      </div>
    `;
  }
}
