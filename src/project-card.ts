import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('project-card')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ProjectCard extends LitElement {
  @property({ type: String }) name = 'name';

  static styles = css`
    :host {
      display: flex;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      box-sizing: border-box; /* Adds padding and border to the width and height */
      height: 100%; /* Initial height */
      padding: 1rem; /* Adds space inside the card */

      transition: transform 0.3s ease; /* Smooth transformation */
      cursor: pointer; /* Indicates the card is clickable */

      border-radius: 16px; /* Adds rounded corners */

      &:hover {
        transform: translateY(-10px); /* Increases size and moves slightly up */
        box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.3); /* Adds a shadow for a 'pop' effect */

        .card-name a {
          color: #b24227;
        }
      }
    }

    /* Card layout */
    /*  icon
        subtitle
        name */

    .card-icon {
      font-size: 2rem;
      font-weight: 900;
      color: #b24227; /* Adjust based on preference */
      margin: 0.25rem 0; /* Spacing between icon and subtitle */
    }

    .card-subtitle {
      font-size: 1rem;
      font-weight: 400;
      font-style: normal;
      margin: 0.25rem 0; /* Spacing between subtitle and name */
    }

    .card-name {
      font-size: 2rem;
      font-weight: 900;
      font-style: italic;
      margin: 0; /* Remove default margin */
    }

    a {
      color: #2c2c2f;
      text-decoration: none;
      transition: 0.2s;

      &:hover,
      &:focus {
        color: #b24227;
        outline: none;
      }
    }
  `;

  openSubpage() {
    // navigate to /{name}
    window.location.href = `/${this.name.toLowerCase()}`;
  }

  render() {
    return html`
      <!-- event listener to open subpage on click or on enter key -->
      <div
        class="card"
        @click="${() => this.openSubpage()}"
        @keydown="${(e: KeyboardEvent) => {
          if (e.key === 'Enter') this.openSubpage();
        }}"
      >
        <span class="card-icon">&#8689;</span>
        <p class="card-subtitle">Design by</p>
        <p class="card-name">
          <a href="/${this.name.toLowerCase()}"> ${this.name} </a>
        </p>
      </div>
    `;
  }
}
