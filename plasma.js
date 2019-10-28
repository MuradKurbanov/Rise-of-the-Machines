class Plasma {
  constructor(params) {
    this.heroY = params.heroY;
    this.plasmaX = 200;
    this.render();
  }

  render = () => {
    const plasmaNode = document.createElement('div');
    plasmaNode.id = 'plasma';
    wrapper.append(plasmaNode);
    plasmaNode.style.top = `${this.heroY + 50}px`;
    plasmaNode.style.left = `${this.heroX + 50}px`;
    const createPlasma = setInterval(() => {
      if (this.plasmaX <= 1000) {
        this.plasmaX += 100;
        plasmaNode.style.top = `${this.heroY + 50}px`;
        plasmaNode.style.left = `${this.plasmaX}px`;
      } else {
        plasmaNode.remove();
        clearInterval(createPlasma);
      }
    }, 200)
  }
}
