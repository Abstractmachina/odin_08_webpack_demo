import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './testimg.jpg';
import Books from './dummy.xml';
import Data from './dummy.csv';

function component() {
    const element = document.createElement('div');
    element.textContent = myName('Cody') + _.join(['hello', 'webpack'], ' ');
    element.classList.add('hello');
    

    //add image
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Books);
    console.log(Data);

    return element;
}

document.body.appendChild(component());