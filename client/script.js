import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loarder(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.'; // add + '.'

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300) // 300 millisec
}