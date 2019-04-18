import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `first-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FirstElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>[[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Mi Primer elemento Template en Polymer 3',
      },
    };
  }
}

window.customElements.define('first-element', FirstElement);
