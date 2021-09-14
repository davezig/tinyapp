let apps = ['app', 'blog', 'shop', 'note', 'game', 'grave'];

let currentApp = document.getElementById('app-name');
currentApp.innerHTML = apps[0];

const moveRight = () => {
  apps.push(apps.shift());
  return apps;
};

const moveLeft = () => {
  apps.unshift(apps.pop());
};

// use the moveRight function on the >
const clickRight

// use the moveLeft function on the >
const clickLeft
