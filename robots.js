const spaceForRobots = document.getElementById('spaceForRobots');
const random = () => Math.round(Math.random() * 10);

const Robot = function(params) {
  this.id = params.id;
  this.position = 0;
  this.render = function render() {

    const showRobot = document.createElement('div');
    showRobot.className = 'robot';
    spaceForRobots.append(showRobot);

    setInterval(() => {
      this.position += 10;
      // showRobot.style.transform = `scale(${random() > 8 ? 1 : -1}, 1)`;
      showRobot.style.marginRight = `${this.position}px`;
    }, 300 * random() || 300);
  }
  this.render()
}

Array.from({ length: 3 }).map((item, i) => new Robot({id: i}));




























//1
