import _ from 'lodash';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = _.join(['hello ', 'click me'], ' ');
    btn.onclick = printMe;
    element.appendChild(btn);

    var pre = document.createElement('pre');
  
    pre.innerHTML = [
        'Hello webpack!',
        'this is pre',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    element.appendChild(pre);
 

    return element;
}

document.body.appendChild(component());