const wrapper = document.getElementById('wrapper');
const confirm = (a, b) => a - b < 120 && a > b || b - a < 120 && b > a;
const random = (min, max) => Math.round(min + Math.random() * (max - min + 1));
const coordinates = new Set();

class Node {
  constructor(params) {
    this.coordX = params.coordX;
    this.coordY = params.coordY;
    this.node = document.createElement('div');
    this.style = params.style;
    this.render();
  }

  render = () => {
    const { node } = this;
    node.id = `${this.style}`;
    node.style.top = `${this.coordY}px`;
    wrapper.append(node);
    coordinates.add(node);
    const moveNode = setInterval(() => {
      Array.from(coordinates).forEach((item, i, arr) => {
        let n1 = item.getBoundingClientRect()
        let n2 = node.getBoundingClientRect();
        if (confirm(n1.y, n2.y) && confirm(n1.x, n2.x) && this.node.id !== 'rocket') {
          coordinates.delete(node);
          coordinates.delete(item);
          node.remove();
          item.remove();
          clearInterval(moveNode);
        }
      })
      if (this.style === 'robot' || this.style === 'rocket' && this.node.getBoundingClientRect().x > 55) node.style.left = '50px';
      else if (this.style === 'plasma' && this.node.getBoundingClientRect().x < 1050) node.style.left = '1100px';
      else { node.remove(); coordinates.delete(node); clearInterval(moveNode); }
    }, 400);
  }
}

const heroInAction = () => {
  const HeightScreen = document.documentElement.clientHeight - 150;
  const heroNode = document.getElementById('hero');
  let coordY = 400;
  wrapper.onmousemove = (e) => {
    coordY = e.clientY;
    heroNode.style.top = `${coordY <= HeightScreen ? coordY : null}px`;
  }

  // Create Plasma
  setInterval(() => new Node({
    coordX: 300,
    coordY: coordY + 55,
    style: 'plasma',
  }),1500);
}
heroInAction();

// Create Robots
setInterval(() => new Node({
  coordX: 1150,
  coordY: random(20, 650),
  style: 'robot',
}), 2000);

// Create Rocket
setInterval(() => new Node({
  coordX: 1150,
  coordY: random(20, 650),
  style: 'rocket',
}), 5000);
