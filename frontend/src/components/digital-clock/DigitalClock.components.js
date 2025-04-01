export default class DigitalClockComponents extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `    
    <main class="container">
      <div class="clock">
        <span class="hours">00</span><span class="divider">:</span>
        <span class="minutes">00</span><span class="divider">:</span>
        <span class="seconds">00</span>
      </div>
    </main>
  `;
  }

  connectedCallback() {
    console.log('Componente carregado com sucesso.');
  }
}

customElements.define('digital-clock', DigitalClockComponents);
