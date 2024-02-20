import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './lightbox-component.js';

@customElement('project-page')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ProjectPage extends LitElement {
  @property({ type: Array }) imageGrid = [
    [
      { url: 'assets/cover-illustration.png', alt: 'desc' },
      { url: 'assets/open-wc-logo.svg', alt: 'desc' },
      { url: 'assets/cover-illustration.png', alt: 'desc' },
    ],
    [
      { url: 'assets/cover-illustration.png', alt: 'desc' },
      { url: 'assets/open-wc-logo.svg', alt: 'desc' },
      { url: 'assets/cover-illustration.png', alt: 'desc' },
    ],
    [
      { url: 'assets/open-wc-logo.svg', alt: 'desc' },
      { url: 'assets/open-wc-logo.svg', alt: 'desc' },
      { url: 'assets/cover-illustration.png', alt: 'desc' },
    ],
  ];

  @property({ type: Object }) text = {
    title: 'ProjectPage',
    body: [
      'This project page is a work in progress.',
      'Please check back later.',
    ],
  };

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
        rgba(242, 211, 146, 1) 66%,
        rgba(250, 239, 217, 1) 88%,
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
      padding: 2rem; /* Adjust based on preference */
      box-sizing: border-box;
    }

    .text-container {
      & .text-title {
        width: 90%;
        text-align: left;

        & h1 {
          font-size: 2rem;
          font-size: 2vw;
          font-weight: 900;
          text-decoration: underline solid #b24227 0.2rem;
        }
      }

      & .text-paras {
        font-family: 'Lora', serif;
        font-size: 1.1rem;
        font-size: 1.1vw;
        font-weight: 450;
        line-height: 1.5;

        flex-basis: 80%;
        width: 90%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .typewriter h1 {
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      border-right: 0.15em solid #b24227; /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: 0.1em; /* Adjust as needed */
      animation: typing 6s steps(30, end), blink-caret 0.2s step-end 31;
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

    .lightbox-container {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-basis: 50%;
      height: 100%;
      padding: 2rem;
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

      & .current {
        & a {
          color: #b24227;
        }

        align-self: flex-end;
      }
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
    '/empathy',
    '/decomposition',
    '/analogy',
    '/style',
    '/context',
    '/collage',
  ];

  roman_numerals = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ'];

  // eslint-disable-next-line class-methods-use-this
  returnHome() {
    window.location.href = `/`;
  }

  headerTemplate() {
    const currentPage = window.location.pathname;
    const currentPageIndex = this.pages.indexOf(currentPage);

    return html`<div class="header">
      <p><a href="/">⬅</a> <a href="/">experience.design</a></p>
      <p>·</p>
      <div class="index">
        ${this.pages.map((page, index) => {
          const className = currentPage === page ? 'current' : '';
          return html`<p class=${className}>
            <a href=${page}>${this.roman_numerals[index]}</a>
          </p>`;
        })}
      </div>
      <p>·</p>
      <p>
        ${currentPageIndex < 5
          ? html`<a href=${this.pages[currentPageIndex + 1]}>&nbsp;next →</a>`
          : html`&nbsp;&nbsp;end ∎`}
      </p>
    </div>`;
  }

  render() {
    return html`
      ${this.headerTemplate()}
      <div class="main-content">
        <div class="text-container">
          <div class="text-title typewriter">
            <h1>designing by ${this.text.title}</h1>
          </div>
          <div class="text-paras">
            ${this.text.body.map(paragraph => html`<p>${paragraph}</p>`)}
          </div>
        </div>
        <div class="lightbox-container">
          <lightbox-component .imageGrid=${this.imageGrid}></lightbox-component>
        </div>
      </div>
    `;
  }
}
