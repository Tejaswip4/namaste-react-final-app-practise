import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
 
/*
// JS script code

const header = document.createElement('h1');
header.innerHTML = "Hello Tejaswi here with JS element script";

const root = document.getElementById('root');
root.appendChild(header);
*/

/*
// Using React CDN code

const header = React.createElement('h1', {}, "Hello Tejaswi here React CDN");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);

*/

/*

// Using React CDN nested elements

const header = React.createElement('div', {id:'header'}, 
                 [React.createElement('div', {id:'child1'}, 
                    [React.createElement('h1', {}, "Hello React users i am child1 h1 tag"), 
                     React.createElement('h2', {}, "Hello React users i am child1 h2 tag")
                    ])
                ],
                [React.createElement('div', {id:'child2'}, 
                    [React.createElement('h1', {}, "Hello React users i am child2 h1 tag"), 
                     React.createElement('h2', {}, "Hello React users i am child2 h2 tag")
                    ])
                ]
           );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header)

*/

/*
import React from 'react';
import ReactDOM from 'react-dom/client';


// React elements
const header = React.createElement('div', {id:'header'}, 
    [React.createElement('div', {id:'child1'}, 
       [React.createElement('h1', {}, "Hello React users i am child1 h1 tag"), 
        React.createElement('h2', {}, "Hello React users i am child1 h2 tag")
       ])
   ],
   [React.createElement('div', {id:'child2'}, 
       [React.createElement('h1', {}, "Hello React users i am child2 h1 tag"), 
        React.createElement('h2', {}, "Hello React users i am child2 h2 tag")
       ])
   ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header)

*/

/*

// JSX => transpiled before it reaches the JS => PARCEL => Babel
const jsxHeading = <h1 id='heading'>Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading)

*/

/*
// functional component

const title = (
    <h1>THis is Reatc element</h1>
)

const SubHeading = () => {
    return (
        <div>
            <h1>Namaste React functional component - 2</h1>
        </div>
    )
}
const Heading = () => {
    return (
        <div>
            {title}
            <SubHeading />
            <h1>Namaste React functional component - 1</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />)

*/



const AppLayout = () => {
    return (
        <div>
 <Header />
 <Body />
        </div>
       
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)

// export default Header;