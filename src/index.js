// const element = document.createElement('H1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//const jsx = <h1>Hello, Platzi Badges</h1>;
// const container = document.getElementById('app');

// const element = React.createElement('a', { href: 'https://platzi.com/home' }, 'Ir a platzi');

const name = 'Daniel';
const sum = () => 9 + 9;
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
//const jsx = <h1>Hola, soy {sum()}</h1>;

// const jsx = <div>
//     <h1> Hola, soy Cristian</h1>
//     <p>
//         Soy estudiante de 10 semestre
//     </p>
// </div>

// const element = React.createElement(
//     'div', {}, React.createElement('h1', {}, 'Hola, soy Daniel'),
//     React.createElement('p', {}, 'Soy estudiante de ingeniera de sistemas')
// );
// const container = document.getElementById('app');


const element = (
    <div>
        <h1>Hola, Soy Cristian</h1>
        <p>soy estudiante de ingenieria</p>
    </div>
);
const container = document.getElementById('app');

//ReactDOM.render(__qué__, ___dónde___);
ReactDOM.render(element, container);