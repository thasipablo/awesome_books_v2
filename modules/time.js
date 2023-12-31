import { DateTime } from '../node_modules/luxon/src/luxon.js';

const time = () => {
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  document.querySelector('.time').innerHTML = time;
};

const timer = () => {
  setInterval(time, 1000);
};

export default timer;