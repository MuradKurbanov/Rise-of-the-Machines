const heroNode = document.getElementById('hero');
const wrapper = document.getElementById('wrapper');
const plasma = document.getElementById('plasma');

class Hero {
  constructor() {
    this.position = 300;
  }

  createPlasma() {

  }

  render() {
    plasma.style.display = 'block';
    wrapper.onmousemove = (e) => heroNode.style.top = `${e.clientY}px`;
    setInterval(() => {
      this.position += 30;
      plasma.style.left = `${this.position < 1000 ? this.position : 0}px`;
    }, 300)
  }
}

const hero = new Hero();
hero.render()
