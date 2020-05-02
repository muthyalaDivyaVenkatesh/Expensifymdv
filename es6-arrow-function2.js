'use strict';

console.log("Hello React");

// jsx-javascript xml

var app = {
    'title': 'Indecession App',
    'subtitle': 'Put your hands in system',
    'options': ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// let  user = {
//     name:'Mdvenkatesh',
//     age: 24
// }

// function getlocation(location){
//     if(location){
//         return <p>Location {location}</p>
//     }
// }


// let templateTwo = (
//     <div>
//     <h1>{user.name ?  user.name : 'Anonymus'}</h1>
//     {( user.age && user.age>18)&& <p>Age : {user.age}</p>}
//     {getlocation(user.location)}
//     </div>
// )


// && is callled Logical and Operator
