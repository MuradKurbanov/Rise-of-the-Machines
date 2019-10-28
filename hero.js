const heroNode = document.getElementById('hero');
const wrapper = document.getElementById('wrapper');

class Hero {
  constructor() {
    this.heroY = 400;
    this.render();
  }
  render = () => {
    const HeightScreen = document.documentElement.clientHeight - 150;
    wrapper.onmousemove = (e) => {
      this.heroY = e.clientY;
      heroNode.style.top = `${this.heroY <= HeightScreen ? this.heroY : null}px`;
    }
    setInterval(() => new Plasma({ heroY: this.heroY }), 900)
  }
}

const hero = new Hero();
