const heroNode = document.getElementById('hero');
const wrapper = document.getElementById('wrapper');
const HeightScreen = document.documentElement.clientHeight - 150;
const coordinates = new Set();

const heroInAction = () => {
  let heroY = 400;
  wrapper.onmousemove = (e) => {
    heroY = e.clientY;
    heroNode.style.top = `${heroY <= HeightScreen ? heroY : null}px`;
  }
  setInterval(() => new Plasma({ heroY }), 950);
}
heroInAction();
