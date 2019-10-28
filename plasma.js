class Plasma {
  constructor(params) {
    this.plasmaX = 300;
    this.plasmaY = params.heroY + 50;
    this.render();
  }
  render = () => {
    const plasmaNode = document.createElement('div');
    plasmaNode.id = 'plasma';
    plasmaNode.style.top = `${this.plasmaY}px`;
    plasmaNode.style.left = `${this.plasmaX}px`;
    wrapper.append(plasmaNode);
    const createPlasma = setInterval(() => {
      if (this.plasmaX <= 1000) {
        this.plasmaX += 50;
        plasmaNode.style.left = `${this.plasmaX}px`;
        plasmaNode.style.top = `${this.plasmaY}px`;
        plasmaNode.setAttribute('x', this.plasmaX);
        plasmaNode.setAttribute('y', this.plasmaY);
        coordinates.add(plasmaNode);
      } else {
        plasmaNode.remove();
        clearInterval(createPlasma);
        coordinates.delete(plasmaNode);
      }
    }, 300);
  }
}
