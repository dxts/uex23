import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface ImageItem {
  url: string;
  alt: string;
}

@customElement('lightbox-component')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LightboxComponent extends LitElement {
  @property({ type: Array }) imageGrid: Array<Array<ImageItem>> = [[]]; // Property to hold the 2D array of image URLs, default empty grid

  @state() currentImage: ImageItem | null = null; // Currently selected image URL

  static styles = css`
    * {
      box-sizing: border-box;
      /* border: 1px solid blue !important; */
    }

    :host {
      width: 95%;
      height: 95%;
      max-width: 100%;
      max-height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background: none;
    }

    button {
      font-family: 'IBM Plex Mono', sans-serif, monospace;
      color: #2c2c2f;

      font-size: 2rem;
      font-size: 2vw;
      font-weight: 600;
    }

    .grid-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: space-evenly;
      align-content: space-evenly;

      width: 100%;
      aspect-ratio: 1 / 1;
    }

    .thumbnail {
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
      border-radius: 1rem;

      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: scale3d(1.05, 1.05, 1.05);
        box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.4);
      }
    }

    .thumbnail-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;

      border-radius: 0.5rem;
    }

    .image-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;

      position: relative;
    }

    .image-top-nav {
      align-self: flex-start;
      flex: 1;
    }

    .image-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      max-width: 100%;
      max-height: 90%;
      flex: 9;
    }

    .enlarged-image {
      flex: 95;

      max-height: 95%;
      max-width: 100%;

      & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;

        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
      }
    }

    @keyframes ticker {
      0% {
        transform: translate3d(0, 0, 0);
        visibility: visible;
      }

      100% {
        transform: translate3d(-100%, 0, 0);
      }
    }

    .caption {
      flex: 5;
      width: 100%;

      overflow-x: hidden;
      display: flex;

      background: #2c2c2f;

      font-size: 1rem;
      font-size: 1vw;
      font-weight: 600;

      .ticker {
        display: flex;
        flex: 0 0 auto;
        margin: 0rem 4rem;
        min-width: 100%;
        align-items: center;

        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-name: ticker;

        & .ticker-item {
          display: inline-block;

          padding: 0rem 1rem;
          color: rgba(244, 238, 220, 1);
        }
      }
    }

    .image-container button {
      border: none;
      background: none;
      padding: 0.5rem 1rem 0.5rem 0rem;
      border-radius: 20%;

      cursor: pointer;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
        color: #b24227;
      }
    }
  `;

  enlargedImageTemplate() {
    if (!this.currentImage) {
      return html``;
    }

    return html`
      <div class="image-container">
        <div class="image-top-nav">
          <button class="minimize-button" @click="${this.handleMinimize}">
            ⬅
          </button>
        </div>

        <div class="image-main">
          <div class="enlarged-image">
            <img
              src="${this.currentImage.url}"
              alt="${this.currentImage.alt}"
            />
          </div>

          <div class="caption">
            <div class="ticker">
              <div class="ticker-item">${this.currentImage.alt}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  carousalTemplate() {
    return html`
      <div
        class="grid-container"
        style=${this.currentImage ? 'display: none;' : ''}
      >
        ${this.imageGrid.map(
          (row, rowIndex) => html`
            ${row.map(
              (image, colIndex) => html`
                <div class="thumbnail">
                  <img
                    class="thumbnail-image"
                    src="${image.url}"
                    alt="${image.alt}"
                    @click="${() => this.handleImageClick(rowIndex, colIndex)}"
                    @keydown="${(e: KeyboardEvent) => {
                      if (e.key === 'Enter') {
                        this.handleImageClick(rowIndex, colIndex);
                      }
                    }}"
                  />
                </div>
              `
            )}
          `
        )}
      </div>
    `;
  }

  render() {
    return html`<style>
        .thumbnail {
          width: ${90 / this.imageGrid[0].length}%;
          height: ${90 / this.imageGrid.length}%;
        }
        .ticker {
          animation-duration: ${this.currentImage
            ? `${this.currentImage.alt.length * 0.1}s`
            : '20s'};
        }
      </style>
      ${this.enlargedImageTemplate()} ${this.carousalTemplate()} `;
  }

  handleImageClick(rowIndex: number, colIndex: number) {
    this.currentImage = this.imageGrid[rowIndex][colIndex];
  }

  handleMinimize() {
    this.currentImage = null;
  }
}
