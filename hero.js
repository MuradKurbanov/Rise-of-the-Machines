const heroNode = document.getElementById('hero');
const wrapper = document.getElementById('wrapper');
const plasma = document.getElementById('plasma');

class Hero {
  constructor() {
    this.position = 250;
  }

  // createPlasma() {
  //   plasma.style.display = 'block';
  //   setInterval(() => {
  //     this.position += 30;
  //     plasma.style.left = `${this.position < 1000 ? this.position : 0}px`;
  //   }, 300)
  // }

  render() {
    const HeightScreen = document.documentElement.clientHeight - 150;
    wrapper.onmousemove = (e) => {
      heroNode.style.top = `${e.clientY <= HeightScreen ? e.clientY : null}px`;
    }
  }
}

const hero = new Hero().render();
