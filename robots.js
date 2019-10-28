const random = (min, max) => Math.round(min + Math.random() * (max - min + 1));
const isCheckForX = (cord1, cord2) => Number(cord1) >= Number(cord2) ? true : false;
const isCheckForY = (cord1, cord2) =>  Number(cord1) -  Number(cord2) < 80 &&  Number(cord2) -  Number(cord1) < 80;

class Robot {
  constructor(params) {
    this.robotX = 1100;
    this.robotY = params.robotY;
    this.render();
  }
  render = () => {
    const robot = document.createElement('div');
    robot.id = 'robot';
    robot.style.left = `${this.robotX}px`;
    robot.style.top = `${this.robotY}px`;
    wrapper.append(robot);
    const movementRobot = setInterval(() => {
      Array.from(coordinates)
        .forEach((item, i) => {
          if (isCheckForX(item.getAttribute('x'), this.robotX) && isCheckForY(item.getAttribute('y'), this.robotY)) {
            robot.remove();
            clearInterval(movementRobot);
          }
        })
      this.robotX -= 50;
      robot.style.left = `${this.robotX}px`;
    }, 300);
  }
}

setInterval(() => new Robot({ robotY: random(20, 650) }), 900);
