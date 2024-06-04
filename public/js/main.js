/* eslint-disable */
let message;

fetch(`/cadex${window.location.search}`)
  .then((result) => result.json())
  .then((obj) => {
    if(obj.status === 'error'){
      message = obj.message
    } else {
      message = obj.cadex
    }
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    document.body.appendChild(paragraph);
  });
