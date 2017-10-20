import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';
import printMe from './print.js';

function getComponent() {

  return import ( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data);

    if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
    }

    return element;

  }).catch(error => 'An error occurred while loading the component');

}

getComponent().then(component => {
   document.body.appendChild(component);
 })