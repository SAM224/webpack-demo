import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';
import _ from 'lodash';

function component() {
  var btn = document.createElement('button');
  var element = document.createElement('div');
  var br = document.createElement('br');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  
  element.appendChild(br);
  element.appendChild(btn);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  btn.onclick = e =>
  import ( /* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;

    print();
  });

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);

  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

    return element;
}
document.body.appendChild(component());