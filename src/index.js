import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './testimg.jpg';

function component() {
    const element = document.createElement('div');
    element.textContent = myName('Cody') + _.join(['hello', 'webpack'], ' ');
    element.classList.add('hello');
    

    //add image
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());