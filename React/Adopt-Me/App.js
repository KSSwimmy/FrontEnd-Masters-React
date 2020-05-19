 // your code is going to here
 const App = () => {
    return React.createElement(
        'div',
        {},
        React.createElement('h1', {}, "Adopt Me!")
    )
}
ReactDOM.render(
React.createElement(App),
document.getElementById('root')
)