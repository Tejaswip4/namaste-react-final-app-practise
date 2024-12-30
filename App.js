const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {}, "Here is the element from h1 tag")));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)