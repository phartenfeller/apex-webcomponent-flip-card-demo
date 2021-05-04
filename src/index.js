import '@kemet/kemet-flipcard/kemet-flipcard';
import '@polymer/paper-button/paper-button';
import { css, customElement, html, LitElement, property } from 'lit-element';
import 'social-icon/dile-social-icon';

@customElement('apex-flipcard')
class FlipCard extends LitElement {
  @property()
  name = 'Name Placeholder';

  @property()
  dept = 'Dept Placeholder';

  @property()
  image = '';

  flipped = false;

  static get styles() {
    return css`
      .card {
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        width: 100%;
        background-color: #fff;
        border-radius: 0.5rem;
        padding: 1.5rem;
        z-index: 10;
        height: 370px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      .inner-card {
        list-style: none;
        text-align: left;
        box-sizing: border-box;
      }

      .card-image {
        list-style: none;
        text-align: left;
        box-sizing: border-box;
        display: block;
        vertical-align: middle;
        max-width: 100%;
        border-radius: 9999px;
        margin-left: auto;
        margin-right: auto;
        height: 14rem;
        width: 14rem;
      }

      .card-content {
        list-style: none;
        text-align: left;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        --tw-space-y-reverse: 0;
        margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));
      }

      .card-content-info {
        list-style: none;
        text-align: left;
        --tw-space-y-reverse: 0;
        box-sizing: border-box;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.5rem;
      }

      .text-blue {
        color: rgb(129, 140, 248);
      }

      .back {
        z-index: 1;
        display: none;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.socialname = `${this.name
      .replace(' ', '-')
      .toLocaleLowerCase()}_${Math.floor(Math.random() * 1000)}`;
  }

  firstUpdated() {
    this.front = this.shadowRoot.querySelector('#front');
    this.back = this.shadowRoot.querySelector('#back');
  }

  flipCard() {
    console.log('flip');
    this.flipped = !this.flipped;
    console.log('front', this.front);
    this.requestUpdate();
    setTimeout(() => {
      if (this.flipped) {
        this.back.classList.remove('back');
        this.front.classList.add('back');
      } else {
        this.front.classList.remove('back');
        this.back.classList.add('back');
      }
    }, 250);
  }

  render() {
    return html`<kemet-flipcard measure ?flipped=${this.flipped}>
      <div class="card" id="front" slot="front">
        <div class="inner-card">
          <img class="card-image" src="${this.image}" alt="" />
          <div class="card-content">
            <div class="card-content-info">
              <h3 style="color: black;">${this.name}</h3>
              <p class="text-blue">${this.dept}</p>
            </div>
            <paper-button
              raised
              style="background: white;"
              @click=${this.flipCard}
              >More Info</paper-button
            >
          </div>
        </div>
      </div>
      <div class="card back" id="back" slot="back">
        <h2 class="text-blue">More info..</h2>
        <div>
          <dile-social-icon icon="facebook"></dile-social-icon>
          ${this.socialname}
        </div>
        <div>
          <dile-social-icon icon="twitter"></dile-social-icon>
          ${this.socialname}
        </div>
        <div>
          <dile-social-icon icon="gmail"></dile-social-icon>
          ${this.socialname}
        </div>
        <div>
          <dile-social-icon icon="github"></dile-social-icon>
          ${this.socialname}
        </div>
        <paper-button @click=${this.flipCard} raised style="background: white;"
          >Back</paper-button
        >
      </div>
    </kemet-flipcard>`;
  }
}

export default FlipCard;
